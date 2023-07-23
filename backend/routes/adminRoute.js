const express = require("express");
const { AdminModel } = require("../models/adminModel");
const adminRouter = express.Router();
// name: String,
// img: String,
// email: String,
// password: String,
// city: String,
// phone: String,
adminRouter.post("/register", async (req, res) => {
  const { name, email, password, city, phone } = req.body;
  try {
    const admin = new AdminModel({
      name,
      email,
      password: "Admin",
      city,
      phone,
    });
    await admin.save();
    res.status(200).json({ msg: "admin has been registered", data: req.body });
  } catch (error) {
    res.status(400).json({ err: error.message, data: req.body });
  }
});
module.exports = {
  adminRouter,
};
