const mongoose = require("mongoose");

/**
 * 用户信息表结构
 */
const UserSchema = new mongoose.Schema({
  // userId: mongoose.Schema.Types.ObjectId,
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userAge: { type: Number, min: 1, max: 65 },
  userAddress: String,
  userPrefer: String,
});

module.exports = UserSchema;
