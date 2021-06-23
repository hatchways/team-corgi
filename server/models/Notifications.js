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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Profile'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Profile'
    },
    title: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    }

});

module.exports = Notifications = mongoose.model('notifications', notificationSchema);