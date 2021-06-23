const express = require("express");
const router = express.Router();
const multer = require("multer");

const protect = require("../middleware/auth");
const { uploadPic, deletePic } = require("../controllers/profilePhoto");

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const MAX_PHOTO_SIZE = 5;
const FOLDER_NAME = "photos";

const multiUpload = multer({ storage: storage }).array(
  FOLDER_NAME,
  MAX_PHOTO_SIZE
);

router.route("/upload").post(multiUpload, uploadPic);
router.route("/:id").delete(protect, deletePic);

module.exports = router;
