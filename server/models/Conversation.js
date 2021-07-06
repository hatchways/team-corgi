const mongoose = require("mongoose");
const Messages = require("./Messages");

const conversationSchema = new mongoose.Schema({
  conversation: [{ type: Object, ref: "message" }],
  people: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "profile",
    },
  ],
  id: mongoose.Schema.Types.ObjectId,
});

module.exports = conversation = mongoose.model(
  "conversation",
  conversationSchema
);
