const express = require('express');
const { getAllNotifications, createNotification, readNotification, getUnreadNotifications } = require('../controllers/notifications');
const router = express.Router();


router.route('/all').get(getAllNotifications);
router.route('/').post(createNotification);
router.route('/:id').get(readNotification);
router.route('/unread').get(getUnreadNotifications);

module.exports = router;