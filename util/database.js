const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://admin:" +
  process.env.MONGO_PW +
  "@cluster0.12pdnoz.mongodb.net/books";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(url, options);
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = client.connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = client.connect();
}

module.exports = connectDB;
