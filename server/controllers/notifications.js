const asyncHandler = require('express-async-handler');
const Notifications = require('../models/Notifications');

exports.getAllNotifications = asyncHandler(async(req, res) => {
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
    const request = req.body;
    const notification = await new Notifications({...request, createdAt: Date.now() });
    notification.save((err, not) => {
        if (err) {
            return console.error(err);
        }
        res.status(201).json({ notification });
    })

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