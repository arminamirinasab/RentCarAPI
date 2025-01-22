const { Conn, DB } = require("./Config");
const Rents = DB.collection("rents");

async function Add(doc) {
  await Rents.insertOne(doc)
    .then((result) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

async function GetAll() {
  return await Rents.find().toArray();
}

async function Remove(_id) {
  return await Rents.deleteOne({_id});
}

module.exports = { Add, GetAll, Remove};
