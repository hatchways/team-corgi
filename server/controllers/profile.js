const mongoose = require('mongoose');

const asyncHandler = require('express-async-handler');

const Profile = require('../models/Profile');

// @route POST /profile
// Add a new profile
exports.createProfile = asyncHandler(async(req, res, next) => {
    const profile = req.body;
    const newProfile = new Profile({...profile });

    if (!newProfile) {
        res.status(500);
        throw new Error("Profile could not be created.");
    }
    await newProfile.save();
    res.status(201).json({ success: { profile: newProfile } });
});

// @route GET /profile
// Get all profiles
exports.allProfiles = asyncHandler(async(req, res, next) => {
    const profiles = await Profile.find();
    res.status(200).json({ profiles });
});

// @route GET /profile/:id
// Search profiles for matching id
exports.searchProfiles = asyncHandler(async(req, res, next) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
        res.status(404);
        throw new Error("Cannot find a matching profile.");
    }
    res.status(200).json({ success: { profile } });
});

// @route PATCH /profile/:id
// Edit a profile with a matching id

exports.editProfile = asyncHandler(async(req, res, next) => {
    const id = req.params.id;
    const profile = req.body;

    try {
        const editedProfile = await Profile.findByIdAndUpdate(id, profile, {
            new: true,
        });
        res.status(201).json({ success: { profile: editedProfile } });
    } catch (error) {
        res.status(500);
        throw new Error('Could not update profile.');
    }
});

// @route DELETE /profile/:id
// Delete a profile with the given id
exports.deleteProfile = asyncHandler(async(req, res, next) => {
    const id = req.params.id;
    const profile = Profile.findById(id);
    if (!profile) {
        res.status(404);
        throw new Error('Cannot find profile.');
    }
    try {
        Profile.findByIdAndDelete(id);
        res.status(200);
    } catch (error) {
        res.status(500);
        throw new Error('Could not delete profile.');
    }
});

exports.getProfileFromUser = asyncHandler(async(req, res) => {
    const userId = req.params.id;
    const profile = await Profile.findOne({ userId: userId });
    if (!profile) {
        res.status(404);
        throw new Error('Cannot find profile');
    }
    res.status(200).json({ success: { profile } });
});