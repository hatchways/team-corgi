const mongoose = require("mongoose");
const asycnHandler = require("express-async-handler");
const Request = require("../models/Requests");
const Requests = require("../models/Requests");
const Profile = require("../models/Profile");

// @route POST /request
// Add a new request
exports.newRequest = asycnHandler(async (req, res, next) => {
    const request = req.body;
    const newRequest = new Request({ ...request});

    if(!newRequest) {
        res.status(500);
        throw new Error("Request could not be made.");
    }
    await newRequest.save();
    res.status(200).json({ request: newRequest});
});

// @route GET /request
// Get all users requests
exports.userRequests = asycnHandler(async (req, res, next) => {
    const id = req.params.user.id;
    const requests = await Requests.find(
        { $or: [{"user.id": id}, {"sitter.id": id}]
    });
    if(!requests) {
        res.status(400);
        throw new Error("No requests with that ID");
    }
    await userRequests.save();
    res.status(200).json({ request = userRequests});
});

// @route PATCH /request/:requestId
// Edit a request with matching userId
exports.editRequest = asycnHandler(async (req, res, next) => {
    const id = req.params.requestId;
    const request = req.body;

    try {
        const editedRequest = await Profile.findByIdAndUpdate(id, request, { new: true,});
        res.status(201).json({ success: { request : editedRequest } });
    } catch (error) {
        res.status(500);
        throw new Error("Could not update request.");
    }
});

// @route DELETE /request/:requestId
// Delete a request with matching requestId
exports.deleteRequest = asycnHandler(async (req, res, next) => {
    const id = req.params.requestId;
    const request = Request.findbyId(id);
    if(!request) {
        res.status(404);
        throw new Error("Cannot find request to delete.");
    }
    try {
        Request.findbyIdAndDelete(id);
        res.status(200);
    } catch (error) {
        res.status(500);
        throw new Error("Could not delete request.");
    }
});
