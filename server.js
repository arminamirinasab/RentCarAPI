const http = require("http");
const UserController = require("./controllers/UserController");
const CarController = require("./controllers/CarController");
const RentController = require("./controllers/RentController");
require("dotenv").config();

http
  .createServer((req, res) => {
    switch (req.method) {
      // Check GET request and set API routes
      case "GET":
        if (req.url.startsWith("/users")) {
          UserController.GetUsers(req, res);
        } else if (req.url.startsWith("/cars")) {
          CarController.GetCars(req, res);
        } else if (req.url.startsWith("/rents")) {
          RentController.GetRents(req, res);
        } else {
          res.writeHead(400);
          res.end("Invalid GET Request");
        }
        break;
      // Check POST request and set API routes
      case "POST":
        if (req.url.startsWith("/users/add")) {
          UserController.AddUser(req, res);
        } else if (req.url.startsWith("/cars/add")) {
          CarController.AddCar(req, res);
        } else if (req.url.startsWith("/rents/add")) {
          RentController.AddRent(req, res);
        } else {
          res.writeHead(400);
          res.end("Invalid POST Request");
        }
        break;
      // Check PUT request and set API routes
      case "PUT":
        if (req.url.startsWith("/cars/edit")) {
          CarController.EditCar(req, res);
        } else {
          res.writeHead(400);
          res.end("Invalid PUT Request");
        }
        break;
      // Check DELETE request and set API routes
      case "DELETE":
        if (req.url.startsWith("/users/remove")) {
          UserController.RemoveUser(req, res);
        } else if (req.url.startsWith("/cars/remove")) {
          CarController.RemoveCar(req, res);
        } else if (req.url.startsWith("/rents/remove")) {
          RentController.RemoveRent(req, res);
        } else {
          res.writeHead(400);
          res.end("Invalid DELETE Request");
        }
        break;
      default:
        res.writeHead(400);
        res.end("Bad Request");
        break;
    }
  })
  .listen(process.env.PORT, (error) => {
    if (error) {
      console.log("We have some problem in listening to server !");
      throw error;
    } else {
      console.log("Server is running ...");
    }
  });
