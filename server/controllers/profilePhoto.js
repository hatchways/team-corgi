const mongoose = require("mongoose");
const { cloudinary } = require("../utils/cloudinary");
const Profile = require("../models/Profile");

const asyncHandler = require("express-async-handler");

// @route POST /profilePic
// Upload a new pic
exports.uploadPic = asyncHandler(async (req, res, next) => {
  const file = req.file;
  try {
    const fileStr = req.body.pics;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    const profile = await Profile.findById(req.id);
    res.json(uploadedResponse.url);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Something went wrong" });
  }
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
    Profile.findByIdAndUpdate(id, { profilePic: "" });
    res.status(200);
  } catch (error) {
    res.status(500);
    throw new Error("Could not delete Image.");
  }
});
