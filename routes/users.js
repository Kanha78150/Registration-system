const mongoose = require('mongoose');


const plm = require("passport-local-mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/formValidation");

// Create user Scheam
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phonenumber: {
    type: Number,
  },

  password: {
    type: String
  },

  birth: {
    type: Date
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);


