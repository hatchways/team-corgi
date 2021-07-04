const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const {
    allProfiles,
    createProfile,
    searchProfiles,
    editProfile,
    deleteProfile,
    getProfileFromUser,
} = require("../controllers/profile");

router.route("/").post(protect, createProfile);
router.route("/").get(allProfiles);
router.route("/:id").get(searchProfiles);
router.route("/:id").patch(protect, editProfile);
router.route("/:id").delete(protect, deleteProfile);
router.route("/userProfile/:id").get(getProfileFromUser);
module.exports = router;