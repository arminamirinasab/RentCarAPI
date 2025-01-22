const { ObjectId } = require("mongodb");
const Rent = require("../models/Rent");
const URL = require("url");

function AddRent(req, res) {
  req.on("data", (data) => {
    if (Rent.Add(JSON.parse(data))) {
      res.writeHead(201);
      res.end("Rent Added");
    } else {
      res.writeHead(400);
      res.end("We have some problem in rent add");
    }
  });

  req.on("end", () => {});
}

async function GetRents(req, res) {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(await Rent.GetAll()));
}

async function RemoveRent(req, res) {
  let RentId = URL.parse(req.url, true).query.id;
  if (RentId) {
    if ((await Rent.Remove(new ObjectId(RentId))).deletedCount == 1) {
      res.writeHead(200);
      res.end("User Removed Successfuly");
    } else {
      res.writeHead(400);
      res.end("User Not Found");
    }
  } else {
    res.writeHead(400);
    res.end("Invalid Delete Request");
  }
}

module.exports = {AddRent, GetRents, RemoveRent};
