const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const { uploadPic, deletePic } = require("../controllers/profilePhoto");

router.route("/pic").post(protect, uploadPic);
router.route("/pic").delete(protect, deletePic);

module.exports = router;
