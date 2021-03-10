const e = require("express");
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: String,
  password: String,
  type: String
});

module.exports = mongoose.model("User", user);