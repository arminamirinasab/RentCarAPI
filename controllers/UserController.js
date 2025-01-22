const { ObjectId } = require("mongodb");
const User = require("../models/User");
const URL = require("url");

function AddUser(req, res) {
  req.on("data", (data) => {
    if (User.Add(JSON.parse(data))) {
      res.writeHead(201);
      res.end("User Added");
    } else {
      res.writeHead(400);
      res.end("We have some problem in user add");
    }
  });

  req.on("end", () => {});
}

async function GetUsers(req, res) {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(await User.GetAll()));
}

async function RemoveUser(req, res) {
  let UserId = URL.parse(req.url, true).query.id;
  if (UserId) {
    if ((await User.Remove(new ObjectId(UserId))).deletedCount == 1) {
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

module.exports = { AddUser, GetUsers, RemoveUser };
