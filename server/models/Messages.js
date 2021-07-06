const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: String,
  read: {
    type: Boolean,
    default: false,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "profile",
  },
});

module.exports = Message = mongoose.model("message", messagesSchema);
