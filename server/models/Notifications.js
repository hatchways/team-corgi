const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date,
        default: Date.now
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    read: {
        type: boolean,
        required: true,
        default: false,
    }

});

module.exports = Notifications = mongoose.model('notifications', notificationSchema);