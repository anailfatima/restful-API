const express = require("express");

const app = express();

//We have created a folder named as 'db' which contains the file 'dbConnect' thus using './db/dbConnect' to access that file
const dbConnect = require("./db/dbConnect");
//For inserting documents in database
const User = require("./db/userModel");

//Connects our mongodb database to our application. This will execute our database connections
dbConnect();

//creating a new doc for database
const newUser = new User({
email: "abcd@example.com",
password: "123abc",
});

//inserting or saving the created doc in database
newUser
.save()
.then(() => {
console.log("User inserted successfully");
})
.catch((error) => {
console.log("Error inserting user : ", error);
});

//we are now exporting our 'app' module
module.exports = app;
