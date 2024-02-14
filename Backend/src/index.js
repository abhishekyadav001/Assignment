require("express-async-errors");
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const userRoute = require("./route/users.route");
require("dotenv").config();
const app = express();
const port = 8080 || process.env.port;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.listen(port, async () => {
  try {
    await connection();
    console.log("db connected");
    console.log("listeneing port", port);
  } catch (error) {
    console.log(error.message);
  }
});
