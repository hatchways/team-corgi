const mongoose = require("mongoose");
const multer = require("multer");

const asyncHandler = require("express-async-handler");

// @route POST /profilePic
// Upload a new pic
exports.uploadPic = asyncHandler(async (req, res, next) => {
  const fd = new FormData();
  const file = req.file;
  if (!file) {
    res.status(404);
    throw new Error("Cannot find picture.");
  }
  fd.append("image", file, file.name);
  res.status(201).json({ success: fd });
});

// @route DELETE /profilePic
// Delete profilePic
exports.deletePic = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const profile = Profile.findById(id);
  if (!profile) {
    res.status(404);
    throw new Error("Cannot find profile.");
  }
  try {
    Profile.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    res.status(500);
    throw new Error("Could not delete profile.");
  }
});
