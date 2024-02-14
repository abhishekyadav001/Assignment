const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    voteStatus: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
