const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    meals: [{
        name: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        ingredients: [{
            name: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        }],
        calories: {
            type: Number,
            required: true
        },
        macros: {
            protein: {
                type: Number,
                required: true
            },
            carbs: {
                type: Number,
                required: true
            },
            fat: {
                type: Number,
                required: true
            }
        }
    }],
    totalCalories: {
        type: Number,
        required: true
    },
    totalMacros: {
        protein: {
            type: Number,
            required: true
        },
        carbs: {
            type: Number,
            required: true
        },
        fat: {
            type: Number,
            required: true
        }
    },
    isPro: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition; 