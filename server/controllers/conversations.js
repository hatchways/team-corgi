const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Conversation = require("../models/Conversation");

// @route GET /conversations/all
//Get all conversations of a user
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  const conversations = await Conversation.find({
    people: { $all: [req.body.userId] },
  });
  if (!conversations) {
    res.status(404);
    throw new Error("Cannot find conversation.");
  }
  res.status(200).json({ success: { conversations } });
});

// @route POST /conversations
//Make a new conversation between sender/reciever
exports.makeConversation = asyncHandler(async (req, res, next) => {
  const newConversation = new Conversation({
    people: [req.body.sender, req.body.reciever],
  });
  try {
    await newConversation.save();
    res.status(201).json({ success: { conversation: newConversation } });
  } catch (error) {
    res.status(500).json({ error });
  }
});
