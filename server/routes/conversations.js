const express = require("express");
const {
  getAllConversations,
  makeConversation,
} = require("../controllers/conversations");
const {
  createMessage,
  getMessages,
  seenMessage,
} = require("../controllers/messages");
const router = express.Router();

router.route("/all").get(getAllConversations);
router.route("/").post(makeConversation);
router.route("/:id").get(getMessages);
router.route("/messages").post(createMessage);
router.route("/messages/:id").patch(seenMessage);

module.exports = router;
