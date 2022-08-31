const mongoose = require("mongoose");

const userSchema = require("../schemas/userSchema");

exports.User = mongoose.model("User", userSchema);
