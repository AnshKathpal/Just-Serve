const mongoose = require("mongoose");
// "location": "Pune",
// "role": "Teaching Assistant",
// "name": "EducateNow",
// "description": "Join as a teaching assistant and play a vital role in shaping young minds. Collaborate with teachers, provide individualized support, and help students succeed academically and emotionally. Your dedication and passion for education can make a lasting impact on the future generation.",
// "typeofwork": "Onsite",
// "updated": "1 day ago"
const VolunteerSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    role: String,
    location: {
      type: String,
      enum: ["Pune", "Mumbai", "Bangalore", "Delhi", "Kolkata", "Noida"],
      required: true,
    },
    typeofwork: String,
    updated: String,
  },
  {
    versionKey: false,
  }
);

const VolunteerModel = mongoose.model("volunteer", VolunteerSchema);
module.exports = { VolunteerModel };
