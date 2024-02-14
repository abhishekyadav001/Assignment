const express = require("express");
const getAllUsers = require("../controller/user.controller");
const userRoute = express.Router();

userRoute.route("/getallusers").get(getAllUsers);

module.exports = userRoute;
