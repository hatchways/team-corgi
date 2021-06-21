const express = require('express');
const { getAllnotifications, createNotification, readNotification, getUnreadNotifications } = require('../controllers/notifications');
const router = express.Router();


router.route('/all/:id').get(getAllnotifications);
router.route('/').post(createNotification);
router.route('/:id').get(readNotification);
router.route('/unread/:id').get(getUnreadNotifications);

module.exports = router;