const express = require('express');
const { getAllnotifications, createNotification, readNotification, getUnreadNotifications } = require('../controllers/notifications');
const router = express.Router();

router.route('/').get('notifications', getAllnotifications);
router.post('/addnotification', createNotification);
router.get('/readnotification', readNotification);
router.get('/unreadnotifications', getUnreadNotifications);

module.exports = router;