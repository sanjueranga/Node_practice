const express = require("express");
const app = express();



const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, ".", ".env");
dotenv.config({ path: envPath });
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success");
});



const bodyParser = require("body-parser");
app.use(bodyParser.json());




//Create A route to Create A user
// /user


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is up and running on : " + PORT);
});
