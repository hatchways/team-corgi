const { cloudinary } = require("../utils/cloudinary");

const asyncHandler = require("express-async-handler");

// @route POST /profilePic
// Upload a new pic
exports.uploadPic = asyncHandler(async (req, res, next) => {
  try {
    const file = req.body;
    const fileStr = JSON.stringify({ file });
    const uploadedResponse = await cloudinary.uploader.unsigned_upload(
      fileStr,
      {
        upload_preset: "dev-setups",
      }
    );
    res.json({ msg: "Things definitely happening" });
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
    Profile.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    res.status(500);
    throw new Error("Could not delete profile.");
  }
});
