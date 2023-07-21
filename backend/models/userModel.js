const mongoose = require("mongoose");

// schema
const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    password: String,
    city: String,
  },
  {
    versionKey: false,
  }
);

// model
const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel,
};
