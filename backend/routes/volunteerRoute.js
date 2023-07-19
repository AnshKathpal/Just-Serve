const express = require("express");
const { VolunteerModel } = require("../models/volunteerModel");

const volunteerRouter = express.Router();

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

volunteerRouter.get("/get", async (req, res) => {
  const { location, type } = req.query;
  try {
    if (location && type) {
      const data = await VolunteerModel.find({
        $and: [{ location: location }, { typeofwork: type }],
      });
      res.status(200).json({ data: data });
    }
    else if (location) {
      const data = await VolunteerModel.find({ location: location });
      res.status(200).json({ data: data });
    }
    else if (type) {
      const data = await VolunteerModel.find({ typeofwork: type });
      res.status(200).json({ data: data });
    }
    else {
      const data = await VolunteerModel.find({});
      res.status(200).json({ data: data });
    }
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});




module.exports = { volunteerRouter };
