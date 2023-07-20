const express = require("express");

const jwt = require("jsonwebtoken");

const userRouter = express.Router();

const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModel");

require("dotenv").config();

// register
userRouter.post("/register", async (req, res) => {
  const { name, email, gender, password, age, city, is_married } = req.body;
  try {
    const user1 = await UserModel.findOne({ email });
    if (user1) {
      res.status(404).send({ msg: "User is Already Registerd" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new UserModel({
          name,
          email,
          gender,
          password: hash,
          city,
        });
        await user.save();
        res.status(200).send({ msg: "User has been Registerd" });
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user1 = await UserModel.findOne({ email });
    if (user1) {
      bcrypt.compare(password, user1.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ course: "backend" }, process.env.secret);
          res.status(200).send({ msg: "Login Successful", token: token });
        } else {
          res.status(400).send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.status(400).send({ msg: "User not Exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = {
  userRouter,
};
