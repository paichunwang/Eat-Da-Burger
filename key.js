console.log("Connected Key.js");

require("dotenv").config({ path: "./.env" });

//REFER TO dotenv.example.txt to fillout the proper credential .env files

exports.clearDB = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
