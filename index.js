// 필요한 라이브러리 가져오기
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

// 라우터 가져오기

// korea
const bestSellers = require("./routes/korea/bestSellers");
const steadySellers = require("./routes/korea/steadySellers");
const newBook = require("./routes/korea/newBook");
const bestSellers1_1 = require("./routes/korea/bestSellers1_1");
const bestSellers1_2 = require("./routes/korea/bestSellers1_2");
const bestSellers1_3 = require("./routes/korea/bestSellers1_3");
const bestSellers1_4 = require("./routes/korea/bestSellers1_4");
const bestSellers1_5 = require("./routes/korea/bestSellers1_5");
const bestSellers1_6 = require("./routes/korea/bestSellers1_6");
const bestSellers1_7 = require("./routes/korea/bestSellers1_7");
const bestSellers1_8 = require("./routes/korea/bestSellers1_8");
const bestSellers1_9 = require("./routes/korea/bestSellers1_9");
const bestSellers1_10 = require("./routes/korea/bestSellers1_10");
const bestSellers1_11 = require("./routes/korea/bestSellers1_11");
const bestSellers1_12 = require("./routes/korea/bestSellers1_12");
const bestSellers1_13 = require("./routes/korea/bestSellers1_13");
const bestSellers1_14 = require("./routes/korea/bestSellers1_14");
const bestSellers1_15 = require("./routes/korea/bestSellers1_15");
const bestSellers1_16 = require("./routes/korea/bestSellers1_16");
const bestSellers1_17 = require("./routes/korea/bestSellers1_17");
const bestSellers1_18 = require("./routes/korea/bestSellers1_18");
const bestSellers1_19 = require("./routes/korea/bestSellers1_19");
const bestSellers1_20 = require("./routes/korea/bestSellers1_20");
const bestSellers1_21 = require("./routes/korea/bestSellers1_21");
const bestSellers1_22 = require("./routes/korea/bestSellers1_22");
const bestSellers1_23 = require("./routes/korea/bestSellers1_23");
const bestSellers1_24 = require("./routes/korea/bestSellers1_24");
const bestSellers1_25 = require("./routes/korea/bestSellers1_25");
const bestSellers1_26 = require("./routes/korea/bestSellers1_26");

// western
const bestSellers2 = require("./routes/western/bestSellers2");
const steadySellers2 = require("./routes/western/steadySellers2");
const newBook2 = require("./routes/western/newBook2");
const bestSellers2_1 = require("./routes/western/bestSellers2_1");
const bestSellers2_2 = require("./routes/western/bestSellers2_2");
const bestSellers2_3 = require("./routes/western/bestSellers2_3");
const bestSellers2_4 = require("./routes/western/bestSellers2_4");
const bestSellers2_5 = require("./routes/western/bestSellers2_5");
const bestSellers2_6 = require("./routes/western/bestSellers2_6");
const bestSellers2_7 = require("./routes/western/bestSellers2_7");
const bestSellers2_8 = require("./routes/western/bestSellers2_8");
const bestSellers2_9 = require("./routes/western/bestSellers2_9");
const bestSellers2_10 = require("./routes/western/bestSellers2_10");
const bestSellers2_11 = require("./routes/western/bestSellers2_11");
const bestSellers2_12 = require("./routes/western/bestSellers2_12");
const bestSellers2_13 = require("./routes/western/bestSellers2_13");
const bestSellers2_14 = require("./routes/western/bestSellers2_14");

// japan
const bestSellers3 = require("./routes/japan/bestSellers3");
const steadySellers3 = require("./routes/japan/steadySellers3");
const newBook3 = require("./routes/japan/newBook3");
const bestSellers3_1 = require("./routes/japan/bestSellers3_1");
const bestSellers3_2 = require("./routes/japan/bestSellers3_2");
const bestSellers3_3 = require("./routes/japan/bestSellers3_3");
const bestSellers3_4 = require("./routes/japan/bestSellers3_4");
const bestSellers3_5 = require("./routes/japan/bestSellers3_5");
const bestSellers3_6 = require("./routes/japan/bestSellers3_6");
const bestSellers3_7 = require("./routes/japan/bestSellers3_7");
const bestSellers3_8 = require("./routes/japan/bestSellers3_8");
const bestSellers3_9 = require("./routes/japan/bestSellers3_9");
const bestSellers3_10 = require("./routes/japan/bestSellers3_10");
const bestSellers3_11 = require("./routes/japan/bestSellers3_11");

// express 도구
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

// 라우터 사용

// korea
app.use("/bestSellers", bestSellers);
app.use("/steadySellers", steadySellers);
app.use("/newBook", newBook);
app.use("/bestSellers1_1", bestSellers1_1);
app.use("/bestSellers1_2", bestSellers1_2);
app.use("/bestSellers1_3", bestSellers1_3);
app.use("/bestSellers1_4", bestSellers1_4);
app.use("/bestSellers1_5", bestSellers1_5);
app.use("/bestSellers1_6", bestSellers1_6);
app.use("/bestSellers1_7", bestSellers1_7);
app.use("/bestSellers1_8", bestSellers1_8);
app.use("/bestSellers1_9", bestSellers1_9);
app.use("/bestSellers1_10", bestSellers1_10);
app.use("/bestSellers1_11", bestSellers1_11);
app.use("/bestSellers1_12", bestSellers1_12);
app.use("/bestSellers1_13", bestSellers1_13);
app.use("/bestSellers1_14", bestSellers1_14);
app.use("/bestSellers1_15", bestSellers1_15);
app.use("/bestSellers1_16", bestSellers1_16);
app.use("/bestSellers1_17", bestSellers1_17);
app.use("/bestSellers1_18", bestSellers1_18);
app.use("/bestSellers1_19", bestSellers1_19);
app.use("/bestSellers1_20", bestSellers1_20);
app.use("/bestSellers1_21", bestSellers1_21);
app.use("/bestSellers1_22", bestSellers1_22);
app.use("/bestSellers1_23", bestSellers1_23);
app.use("/bestSellers1_24", bestSellers1_24);
app.use("/bestSellers1_25", bestSellers1_25);
app.use("/bestSellers1_26", bestSellers1_26);

// western
app.use("/bestSellers2", bestSellers2);
app.use("/steadySellers2", steadySellers2);
app.use("/newBook2", newBook2);
app.use("/bestSellers2_1", bestSellers2_1);
app.use("/bestSellers2_2", bestSellers2_2);
app.use("/bestSellers2_3", bestSellers2_3);
app.use("/bestSellers2_4", bestSellers2_4);
app.use("/bestSellers2_5", bestSellers2_5);
app.use("/bestSellers2_6", bestSellers2_6);
app.use("/bestSellers2_7", bestSellers2_7);
app.use("/bestSellers2_8", bestSellers2_8);
app.use("/bestSellers2_9", bestSellers2_9);
app.use("/bestSellers2_10", bestSellers2_10);
app.use("/bestSellers2_11", bestSellers2_11);
app.use("/bestSellers2_12", bestSellers2_12);
app.use("/bestSellers2_13", bestSellers2_13);
app.use("/bestSellers2_14", bestSellers2_14);

// japan
app.use("/bestSellers3", bestSellers3);
app.use("/steadySellers3", steadySellers3);
app.use("/newBook3", newBook3);
app.use("/bestSellers3_1", bestSellers3_1);
app.use("/bestSellers3_2", bestSellers3_2);
app.use("/bestSellers3_3", bestSellers3_3);
app.use("/bestSellers3_4", bestSellers3_4);
app.use("/bestSellers3_5", bestSellers3_5);
app.use("/bestSellers3_6", bestSellers3_6);
app.use("/bestSellers3_7", bestSellers3_7);
app.use("/bestSellers3_8", bestSellers3_8);
app.use("/bestSellers3_9", bestSellers3_9);
app.use("/bestSellers3_10", bestSellers3_10);
app.use("/bestSellers3_11", bestSellers3_11);

// 크롤링 시작 로직
async function startCrawling() {
  const axios = require("axios");
  try {
    // korea
    await axios.post("http://localhost:" + PORT + "/bestSellers");
    await axios.post("http://localhost:" + PORT + "/steadySellers");
    await axios.post("http://localhost:" + PORT + "/newBook");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_1");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_2");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_3");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_4");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_5");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_6");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_7");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_8");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_9");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_10");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_11");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_12");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_13");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_14");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_15");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_16");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_17");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_18");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_19");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_20");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_21");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_22");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_23");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_24");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_25");
    await axios.post("http://localhost:" + PORT + "/bestSellers1_26");

    // western
    await axios.post("http://localhost:" + PORT + "/bestSellers2");
    await axios.post("http://localhost:" + PORT + "/steadySellers2");
    await axios.post("http://localhost:" + PORT + "/newBook2");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_1");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_2");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_3");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_4");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_5");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_6");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_7");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_8");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_9");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_10");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_11");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_12");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_13");
    await axios.post("http://localhost:" + PORT + "/bestSellers2_14");

    // japan
    await axios.post("http://localhost:" + PORT + "/bestSellers3");
    await axios.post("http://localhost:" + PORT + "/steadySellers3");
    await axios.post("http://localhost:" + PORT + "/newBook3");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_1");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_2");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_3");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_4");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_5");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_6");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_7");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_8");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_9");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_10");
    await axios.post("http://localhost:" + PORT + "/bestSellers3_11");
  } catch (error) {
    console.error("Error while starting crawling:", error.message);
  } finally {
    // 크롤링 작업 후 30분 후에 다시 크롤링 실행
    setTimeout(startCrawling, 30 * 60 * 1000);
  }
}

// 서버 실행 로직
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  startCrawling(); // 크롤링 시작
});
