const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { volunteerRouter } = require("./routes/volunteerRoute");
const app = express();
app.use(express.json());

app.use("/volunteer", volunteerRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    // console.log(process.env);
    console.log(`Server is running at port ${process.env.PORT} `);
  } catch (error) {
    console.log(error.message);
  }
});
