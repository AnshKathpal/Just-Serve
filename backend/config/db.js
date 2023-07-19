const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://abhi:raskar@cluster0.fpapd8w.mongodb.net/JustServe?retryWrites=true&w=majority"
);
module.exports = { connection };
