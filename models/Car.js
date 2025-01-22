const { Conn, DB } = require("./Config");
const Cars = DB.collection("cars");

async function Add(doc) {
  await Cars.insertOne(doc)
    .then((result) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

async function GetAll() {
  return await Cars.find().toArray();
}

async function Remove(_id) {
  return await Cars.deleteOne({ _id });
}

async function Update(_id, newData) {
  return await Cars.updateOne({ _id }, { $set: { ...newData } });
}
// async function Edit(_id, {});

module.exports = { Add, GetAll, Remove, Update };
