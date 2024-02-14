const { default: axios } = require("axios");
const userModel = require("../model/users.model");

const getAllUsers = async (req, res) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.send(data);
  } catch (error) {
    res.status(401).send({ error: error.message, success: false });
  }
};

module.exports = getAllUsers;
