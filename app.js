const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const envPath = path.resolve(__dirname, ".", ".env");
dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);




//Create A route to Create A user
// /user

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection success");
});

app.listen(PORT, () => {
  console.log("Server is up and running on : " + PORT);
});
