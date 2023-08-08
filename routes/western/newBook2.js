const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const connectDB = require("../../util/database");
const router = express.Router();

// 부가 크롤링 함수
async function crawlDetails($, element, index, intro) {
  const title = $(element).find(".bo3 b").text().trim();
  let author = $(element)
    .find(".ss_book_list ul li:eq(2) > a:eq(0)")
    .text()
    .trim();
  let image = $(element).find(".i_cover").attr("src");

  const bestseller = {
    index: index + 1,
    title,
    author,
    intro,
    image,
  };
  return bestseller;
}

router.post("/", async (req, res) => {
  try {
    // 베스트셀러 페이지 URL
    const bestURL =
      "https://www.aladin.co.kr/shop/common/wnew.aspx?ViewRowsCount=100&ViewType=Detail&SortOrder=2&page=1&BranchType=7&PublishDay=180&CustReviewRankStart=&CustReviewRankEnd=&CustReviewCountStart=&CustReviewCountEnd=&PriceFilterMin=&PriceFilterMax=&IsNotForeignSupplier=&SearchOption=";
    const response = await axios.get(bestURL);
    const $ = cheerio.load(response.data);
    const bestsellers = [];

    // intro 크롤링
    const intros = $(".ss_book_box table p.ss_promotion")
      .map((_, p) => $(p).text().trim())
      .get();

    const bestsellersPromises = $(".ss_book_box")
      .map(async (index, element) => {
        const bestseller = await crawlDetails($, element, index, intros[index]);
        return bestseller;
      })
      .get();

    // bestsellers 배열에 추가
    const results = await Promise.all(bestsellersPromises);
    bestsellers.push(...results);

    // db저장
    const client = await connectDB;
    const db = client.db("books");
    const bestCollection = db.collection("newBook2");

    // 변경된 베스트셀러를 추적하기 위한 플래그
    let isBestSellerUpdated = false;

    for (const book of bestsellers) {
      const result = await bestCollection.findOneAndUpdate(
        { title: book.title },
        {
          $set: {
            index: book.index,
            author: book.author,
            image: book.image,
            intro: book.intro,
          },
        },
        {
          upsert: true,
          returnDocument: "after",
        }
      );

      // 변경사항이 발견된 경우 플래그 업데이트
      if (result.lastErrorObject && result.lastErrorObject.updatedExisting) {
        isBestSellerUpdated = true;
      }
    }

    const documentsCount = await bestCollection.countDocuments({});
    // 변경사항이 있는 경우 또는 베스트셀러 컬렉션이 비어 있을 때 전체 요소 삭제 후 새 목록 추가
    if (bestsellers.length > 0 && (isBestSellerUpdated || !documentsCount)) {
      await bestCollection.deleteMany({});
      await bestCollection.insertMany(bestsellers);
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send("An error occurred while processing the request.");
  }

  res.status(200).json("저장완료");
});

module.exports = router;
