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

// get
volunteerRouter.get("/get", async (req, res) => {
  let { location, type, page, limit } = req.query;

  try {
    if (location && type) {
      const data = await VolunteerModel.find({
        $and: [{ location: location }, { typeofwork: type }],
      });
      res.status(200).json({ data: data });
    } else if (location) {
      const data = await VolunteerModel.find({ location: location });
      res.status(200).json({ data: data });
    } else if (type) {
      const data = await VolunteerModel.find({ typeofwork: type });
      res.status(200).json({ data: data });

    } else if (page) {
      page = parseInt(page) || 1; // Default to page 1 if page parameter is not provided
      limit = parseInt(limit) || 10; // Default to 10 items per page if limit parameter is not provided
      try {
        const totalBooks = await VolunteerModel.countDocuments();
        const totalPages = Math.ceil(totalBooks / limit);

        const books = await VolunteerModel.find()
          .skip((page - 1) * limit)
          .limit(limit);

        res.json({
          currentPage: page,
          totalPages,
          data: books,
        });
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch books" });
      }

    } else {
      const data = await VolunteerModel.find({});
      res.status(200).json({ data: data });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
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
