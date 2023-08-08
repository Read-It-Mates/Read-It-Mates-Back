const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const connectDB = require("../../util/database");

const router = express.Router();

// 부가 크롤링 함수
async function crawlDetails($, element, index, intro) {
  const title = $(element).find("p > a").first().text().trim();
  let author = $(element).find("div > a").first().text().trim();
  const linkElement = $(element).find("p > a").attr("href");
  const link = "https://www.yes24.com" + linkElement;
  const bestseller = {
    index: index + 1,
    title,
    author,
    intro,
  };
  try {
    const response = await axios.get(link, { responseType: "arraybuffer" });
    const decodedData = iconv.decode(response.data, "utf-8").toString();
    const details$ = cheerio.load(decodedData);

    // 이미지 크롤링
    const imageElement = details$("em.imgBdr > img.gImg");
    const image = imageElement.attr("src") || imageElement.data("src");

    // 카테고리 크롤링
    const category = details$("#infoset_goodsCate div.infoSetCont_wrap")
      .find("ul.yesAlertLi > li")
      .first()
      .find("a")
      .eq(1)
      .text();

    bestseller.image = image;
    bestseller.category = category;

    return bestseller;
  } catch (error) {
    console.error("Error while crawling details:", error.message);
  }
}

router.post("/", async (req, res) => {
  // 베스트셀러 페이지 URL
  const bestURL =
    "https://www.yes24.com/24/category/bestseller?CategoryNumber=002001010001&sumgb=06&PageNumber=1&FetchSize=100";
  const response = await axios.get(bestURL, { responseType: "arraybuffer" });
  const decodedData = iconv.decode(response.data, "EUC-KR").toString();
  const $ = cheerio.load(decodedData);
  const bestsellers = [];

  // intro 크롤링
  const intros = "";

  const bestsellersPromises = $(".goodsTxtInfo")
    .map(async (index, element) => {
      const bestseller = await crawlDetails($, element, index, intros);
      return bestseller;
    })
    .get();

  // bestsellers 배열에 추가
  const results = await Promise.all(bestsellersPromises);
  bestsellers.push(...results);

  // db저장
  const client = await connectDB;
  const db = client.db("books");
  const bestCollection = db.collection("bestSellers3_8");

  // 변경된 베스트셀러를 추적하기 위한 플래그
  let isBestSellerUpdated = false;

  for (const book of bestsellers) {
    if (book.image == null) {
      book.image = "https://image.yes24.com/momo/Noimg_L.jpg";
    }
    if (book.category === "") {
      book.category = "성인";
    }
    const result = await bestCollection.findOneAndUpdate(
      { title: book.title },
      {
        $set: {
          index: book.index,
          author: book.author,
          image: book.image,
          category: book.category,
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

  res.status(200).json("저장완료");
});

module.exports = router;
