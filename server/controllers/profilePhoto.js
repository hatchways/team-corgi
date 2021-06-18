const mongoose = require("mongoose");

const asyncHandler = require("express-async-handler");

// @route PATCH /profilePic
// Upload a new pic
exports.uploadPic = asyncHandler(async (req, res, next) => {
  const file = req.file;
});

// @route DELETE /profilePic
// Delete profilePic
exports.deletePic = asyncHandler(async (req, res, next) => {});
