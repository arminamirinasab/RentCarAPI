const { MongoClient } = require("mongodb");
require("dotenv").config();
const Conn = new MongoClient(process.env.ConnectionString);
const DB = Conn.db(process.env.DB);

try {
  Conn.connect().then(client => {
    console.log("Connected to database successfuly");
  });
} catch (err) {
  console.error(err);
}

module.exports = {Conn, DB};