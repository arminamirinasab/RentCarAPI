const { ObjectId } = require("mongodb");
const Car = require("../models/Car");
const URL = require("url");

function AddCar(req, res) {
  req.on("data", (data) => {
    if (Car.Add(JSON.parse(data))) {
      res.writeHead(201);
      res.end("Car Added");
    } else {
      res.writeHead(400);
      res.end("We have some problem in car add");
    }
  });
}

async function GetCars(req, res) {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(await Car.GetAll()));
}

async function RemoveCar(req, res) {
  let CarId = URL.parse(req.url, true).query.id;
  if (CarId) {
    if ((await Car.Remove(new ObjectId(CarId))).deletedCount == 1) {
      res.writeHead(200);
      res.end("Car Removed Successfuly");
    } else {
      res.writeHead(400);
      res.end("Car Not Found");
    }
  } else {
    res.writeHead(400);
    res.end("Invalid Delete Request");
  }
}

function EditCar(req, res) {
  let CarId = URL.parse(req.url, true).query.id;
  req.on("data", async (data) => {
    if((await Car.Update(new ObjectId(CarId), JSON.parse(data))).modifiedCount == 1) {
      res.writeHead(200);
      res.end("Car Updated Successfuly");
    } else {
      res.writeHead(400);
      res.end("Update Failed");
    }
  });
}

module.exports = { AddCar, GetCars, RemoveCar, EditCar };
