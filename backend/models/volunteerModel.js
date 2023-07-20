const mongoose = require("mongoose");

// _id // 64b8df66af06d9dafe2c9551
// location :"Pune"
// role :  "Teaching Assistant"
// name :  "EducateNow"
// description :  "Join as a teaching assistant and play a vital role in shaping young mi…"
// typeofwork :  "Onsite"
// start_date :  "July 10, 2023 9:00 AM GMT+5:30"
// end_date :  "July 20, 2023 3:00 PM GMT+5:30"
// address :  "123, ABC Road, Pune"
// image :  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-…"
// schedule :  "Weekdays"
// updated :  "1 day ago"


const VolunteerSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    role: String,
    location: {
      type: String,
      enum: ["Pune", "Mumbai", "Bangalore", "Delhi", "Noida"],
      required: true,
    },
    typeofwork: String,
    updated: String,
    start_date: String,
    end_date: String,
    image: String,
    schedule: String,
    address: String,
  },
  {
    versionKey: false,
  }
);

const VolunteerModel = mongoose.model("volunteer", VolunteerSchema);
module.exports = { VolunteerModel };
