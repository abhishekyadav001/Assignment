const express = require("express");
const { postData, downloadUserdata, getPostdata } = require("../controller/post.controller");
const postRoute = express.Router();

postRoute.route("/:userId").get(getPostdata);
postRoute.route("/:userId").post(postData);
postRoute.route("/:userId/download-excel").get(downloadUserdata);
module.exports = postRoute;
