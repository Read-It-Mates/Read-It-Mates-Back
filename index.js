// 필요한 라이브러리 가져오기
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

// 라우터 가져오기
const bestSellers = require("./routes/bestSellers");
const bestSellers2 = require("./routes/bestSellers2");
const bestSellers3 = require("./routes/bestSellers3");

// express 도구
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

// 라우터 사용
app.use("/bestSellers", bestSellers);
app.use("/bestSellers2", bestSellers2);
app.use("/bestSellers3", bestSellers3);

// 크롤링 시작 로직
async function startCrawling() {
  const axios = require("axios");
  try {
    await axios.post("http://localhost:" + PORT + "/bestSellers");
    await axios.post("http://localhost:" + PORT + "/bestSellers2");
    await axios.post("http://localhost:" + PORT + "/bestSellers3");
  } catch (error) {
    console.error("Error while starting crawling:", error.message);
  } finally {
    // 크롤링 작업 후 10분 후에 다시 크롤링 실행
    setTimeout(startCrawling, 10 * 60 * 1000);
  }
}

// 서버 실행 로직
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  startCrawling(); // 크롤링 시작
});
