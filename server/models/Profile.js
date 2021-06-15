const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: String,
  phoneNumber: Number,
  profilePic: String,
  aboutMe: String,
  gender: String,
  isSitter: {
    type: Boolean,
    required: true,
    default: false,
  },
  availability: [
    {
      start: Date,
      end: Date,
    },
  ],
  wage: Number,
});

module.exports = Profile = mongoose.model("profile", profileSchema);
