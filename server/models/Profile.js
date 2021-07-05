const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: String,
  address: String,
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
      day: String,
      morning: {
        type: Boolean,
        default: true,
      },
      afternoon: {
        type: Boolean,
        default: true,
      },
      evening: {
        type: Boolean,
        default: true,
      },
      night: {
        type: Boolean,
        default: true,
      },
    },
  ],

  wage: Number,
});

module.exports = Profile = mongoose.model("profile", profileSchema);
