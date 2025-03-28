//storing the mongoose package in mongoose variable
// mongoose allows us to connect with mongodb with javascript objects
const mongoose = require("mongoose");
// after writing this run 'npm i mongoose' to import  mongoose



// This particular line of code loads environment variables from a dotenv file and enabling the access to the value stored there.This is commonly used to store sensitive info like database url
require("dotenv").config();
//run 'npm i dotenv' in terminal to install env package



async function dbConnect() {
  //process.env.DB_URL accesses the database url present in env file
  // here we are using mongoose to connect our app to the accessed database url

  mongoose.connect(process.env.DB_URL, {
      //These options ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //After this it returns a promise. .then() in case of successfull connection and .catch() in case of any error

    .then(() => {
      console.log("Successfully connected to mongoDB Atlas");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB");
    });
}


//Now we will just export our function dbConnect()
module.exports = dbConnect;
