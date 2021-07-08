const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "profile",
    },
    sitter: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "profile",
    },
    day: {
        type: Date,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    accept: {
        accepted: Boolean,
    },
    paid: {
        paid: Boolean,
        default: false,
    },
});

module.exports = Request = mongoose.model("request", requestSchema);