const { Conn, DB } = require("./Config");
const Users = DB.collection("users");

async function Add(doc) {
  await Users.insertOne(doc)
    .then((result) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

async function GetAll() {
  return await Users.find().toArray();
}

async function Remove(_id) {
  return await Users.deleteOne({_id});
}

module.exports = { Add, GetAll, Remove};
