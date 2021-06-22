const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const { uploadPic, deletePic } = require("../controllers/profilePhoto");

router.route("/upload").post(uploadPic);
router.route("/:id").delete(protect, deletePic);

module.exports = router;
