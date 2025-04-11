const express = require('express');
const router = express.Router();
const { auth, requirePro } = require('../middleware/auth');
const Workout = require('../models/Workout');

// Get all workouts (basic for free users, advanced for pro)
router.get('/', auth, async (req, res) => {
    try {
        const workouts = await Workout.find({
            $or: [
                { isPro: false },
                { isPro: req.user.isPro }
            ]
        });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error: error.message });
    }
});

// Create workout (pro only)
router.post('/', auth, requirePro, async (req, res) => {
    try {
        const workout = new Workout({
            ...req.body,
            createdBy: req.user._id
        });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ message: 'Error creating workout', error: error.message });
    }
});

// Update workout (pro only)
router.put('/:id', auth, requirePro, async (req, res) => {
    try {
        const workout = await Workout.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user._id },
            req.body,
            { new: true }
        );
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.json(workout);
    } catch (error) {
        res.status(500).json({ message: 'Error updating workout', error: error.message });
    }
});

// Delete workout (pro only)
router.delete('/:id', auth, requirePro, async (req, res) => {
    try {
        const workout = await Workout.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        res.json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting workout', error: error.message });
    }
});

module.exports = router; 