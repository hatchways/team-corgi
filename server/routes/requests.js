const express = require("express");
const router = express.Router();

const {
  newRequest,
  deleteRequest,
  editRequest,
  userRequests,
} = require("../controllers/requests");

router.route("/:id").get(userRequests);
router.route("/").post(newRequest);
router.route("/:id").patch(editRequest);
router.route("/:id").delete(deleteRequest);

module.exports = router;
