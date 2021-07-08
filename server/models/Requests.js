const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user",
  },
  sitter: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user",
  },
  day: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  accepted: Boolean,
  paid: {
    paid: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("request", requestSchema);
