const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  sitter_id: {
    type: String,
    required: true,
    unique: true,
  },
  start: {
    start: Date,
    required: true,
  },
  end: {
    end: Date,
    required: true,
  },
  accept: {
    accepted: Boolean,
    default: false,
  },
  decline: {
    declined: Boolean,
    default: false,
  },
  paid: {
    paid: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("request", requestSchema);