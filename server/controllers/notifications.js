const asyncHandler = require('express-async-handler');
const Notifications = require('../models/Notifications');

exports.getAllnotifications = asyncHandler(async(req, res) => {
    const userId = req.params.id;
    const notifications = await Notifications.find({
        receiver: userId,

    })
    if (!notifications) {
        res.status(404);
        throw new Error('No notifications')
    }
    res.status(200).json({ notifications });

});

exports.readNotification = asyncHandler(async(req, res) => {
    const notification = await Notifications.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!notification) {
        res.status(404);
        throw new Error('Cannot find notification');
    }
    res.status(200).json({ notification });

});

exports.createNotification = (async(req, res) => {
    const notification = req.body;
    const doc = await Notifications.insertMany({...notification, createdAt: Date.now() });
    if (!doc) {
        res.status(500);
        throw new Error('Internal server Error');
    }
    res.status(200).json({ doc });

});

exports.getUnreadNotifications = (async(req, res) => {
    const userId = req.params.id;
    const notifications = await Notifications.find({ receiver: userId, read: false });
    if (!notifications) {
        res.status(204);
        throw new Error('No notifications');
    }
    res.status(200).json({ notifications });
});