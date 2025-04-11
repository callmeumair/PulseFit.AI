const express = require('express');
const router = express.Router();
const { auth, requirePro } = require('../middleware/auth');
const Nutrition = require('../models/Nutrition');

// Get all meal plans (basic for free users, advanced for pro)
router.get('/', auth, async (req, res) => {
    try {
        const mealPlans = await Nutrition.find({
            $or: [
                { isPro: false },
                { isPro: req.user.isPro }
            ]
        });
        res.json(mealPlans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching meal plans', error: error.message });
    }
});

// Create meal plan (pro only)
router.post('/', auth, requirePro, async (req, res) => {
    try {
        const mealPlan = new Nutrition({
            ...req.body,
            createdBy: req.user._id
        });
        await mealPlan.save();
        res.status(201).json(mealPlan);
    } catch (error) {
        res.status(500).json({ message: 'Error creating meal plan', error: error.message });
    }
});

// Update meal plan (pro only)
router.put('/:id', auth, requirePro, async (req, res) => {
    try {
        const mealPlan = await Nutrition.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user._id },
            req.body,
            { new: true }
        );
        if (!mealPlan) {
            return res.status(404).json({ message: 'Meal plan not found' });
        }
        res.json(mealPlan);
    } catch (error) {
        res.status(500).json({ message: 'Error updating meal plan', error: error.message });
    }
});

// Delete meal plan (pro only)
router.delete('/:id', auth, requirePro, async (req, res) => {
    try {
        const mealPlan = await Nutrition.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });
        if (!mealPlan) {
            return res.status(404).json({ message: 'Meal plan not found' });
        }
        res.json({ message: 'Meal plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting meal plan', error: error.message });
    }
});

module.exports = router; 