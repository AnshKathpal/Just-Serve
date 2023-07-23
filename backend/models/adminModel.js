const mongoose = require("mongoose");

// schema
const AdminSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    email: String,
    password: String,
    city: String,
    phone: String,
  },
  {
    versionKey: false,
  }
);

// model
const AdminModel = mongoose.model("admins", AdminSchema);

module.exports = {
  AdminModel,
};
