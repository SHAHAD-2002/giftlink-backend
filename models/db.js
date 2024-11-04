const { MongoClient } = require('mongodb');

let client;
async function connectToDatabase() {
  if (!client) {
    client = new MongoClient("mongodb://localhost:27017/giftlinkDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB");
  }
  return client.db("giftlinkDB");
}

module.exports = { connectToDatabase };
