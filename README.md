
# Car Rental API with Node.js

This is a simple API example written using Node.js and a MangoDB database. You can connect to the database by changing the connection string in the ENV and insert, read or delete data using the following requests.


## Deployment

```bash
  npm start
```

```bash
  node server.js
```

## API Reference

#### GET all items
You will receive the response in JSON format.
```http
  GET: localhost:8080/users/
  GET: localhost:8080/cars/
  GET: localhost:8080/rents/
```

#### POST item

```http
  POST: localhost:8080/users/add
  POST: localhost:8080/cars/add 
  POST: localhost:8080/rents/add
```
Fill your request body with JSON like:

```
// For Cars
{
  "brand": "Honda",
  "model": "Accord",
  "year": 2020,
  "color": "Blue",
  "price": 95000,
  "reserved": true
}
// For Rents
{
  "userID": "6788e7780c64dac448a378e6",
  "carID": "679100a84fba3332adeb1ed3"
}
// For Users
{
  "username": "armin",
  "email": "arminamirinasab@gmail.com",
  "name": "Armin",
  "family": "Amiri Nasab",
  "password": "fsdf48$df$"
}
```

#### PUT item

```http
  PUT: localhost:8080/cars/edit
```
Send your request like this, and fill your request body with your new data
```
localhost:8080/cars/edit?id={$your_id}
```


#### DELETE item

```http
  DELETE: localhost:8080/users/remove?id={$your_id}
  DELETE: localhost:8080/cars/remove?id={$your_id}
  DELETE: localhost:8080/rents/remove?id={$your_id}
```

### Parameters
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to remove and edit |

