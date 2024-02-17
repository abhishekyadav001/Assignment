const express = require("express");
const { getAllUsers, addUsers, downloadUserdata, getAllDatabseUsers } = require("../controller/user.controller");
const userRoute = express.Router();

userRoute.route("/getallusers").get(getAllUsers);
userRoute.route("/dbusers").get(getAllDatabseUsers);
userRoute.route("/postuser").post(addUsers);
module.exports = userRoute;
