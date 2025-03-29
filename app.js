const express = require('express');

const app = express();

//We have created a folder named as 'db' which contains the file 'dbConnect' thus using './db/dbConnect' to access that file
const dbConnect = require('./db/dbConnect');

//Connects our mongodb database to our application. This will execute our database connections
dbConnect()

//we are now exporting our 'app' module
module.exports = app;