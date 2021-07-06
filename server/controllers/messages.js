const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Conversation = require("../models/Conversation");
const Message = require("../models/Messages");

// @route GET /conversations/:id
//Get all messages in a conversation
exports.getMessages = asyncHandler(async (req, res, next) => {
  const conversation = await Conversation.findById(req.params.id);
  const messages = conversation.conversation;
  messages.forEach((message, i) => (messages[i] = JSON.parse(message)));
  if (!conversation) {
    res.status(404);
    throw new Error("Cannot access server or no conversations exist.");
  }
  if (!messages) {
    res.status(200).json({ success: [] });
  }
  res.status(200).json({ success: { messages } });
});

// @route POST /conversations/messages
//Make a new message in a conversation
exports.createMessage = asyncHandler(async (req, res, next) => {
  const { convoId, message, sender } = req.body;
  try {
    const conversation = await Conversation.findById(convoId);
    const newMessage = new Message({
      message,
      sender,
    });
    conversation.conversation.push(JSON.stringify(newMessage));
    await conversation.save();
    res.status(201).json({
      success: {
        message: newMessage,
      },
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// @route PATCH /conversations/messages/:id
//Update status to read
exports.seenMessage = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const conversation = await Conversation.findById(id);
    conversation.conversation.forEach((message, i) => {
      eachMessage = JSON.parse(message);
      if (eachMessage.sender !== req.body.sender) {
        eachMessage.read = true;
      }
      conversation.conversation[i] = JSON.stringify(eachMessage);
    });
    conversation.markModified("conversation");
    await conversation.save();
    res.status(201).json({
      success: true,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});
