const express = require("express");
const { VolunteerModel } = require("../models/volunteerModel");

const volunteerRouter = express.Router();


// create
volunteerRouter.post("/add", async (req, res) => {
  const data = req.body;
  try {
    const volunteer = new VolunteerModel(req.body);
    await volunteer.save();
    res.status(200).json({ msg: "data added sucessfully", data });
  } catch (error) {
    res.status(400).json({ msg: "data not added", error: error.message });
  }
});


// update
volunteerRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("BODY", req.body);
  const posts = await VolunteerModel.findOne({ _id: id });
  console.log("I'm POSTS", posts);

  try {
    await VolunteerModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ msg: "Post Updated Successfully ....!" });
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// delete
volunteerRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log("BODY", req.body);
  const posts = await VolunteerModel.findOne({ _id: id });
  console.log("I'm POSTS", posts);
  try {
    await VolunteerModel.findByIdAndDelete({ _id: id }, req.body);
    res.status(200).json({ msg: "Post Deleted Successfully ....!" });
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = { volunteerRouter };
