const mongoose = require("mongoose");

//Now we have to create a user schema. A schema in mongoose represents the structure
//and datatypes of a doc on mongosb collection

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email Exists"],
  },

  password: {
    type: String,
    required: [true, "Please provide an password"],
    unique: false,
  },
});

module.exports=mongoose.model('Users',UserSchema)