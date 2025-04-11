const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user
        const user = await User.findOne({ _id: decoded.userId });
        
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Add user to request
        req.user = user;
        req.token = token;
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate' });
    }
};

const requirePro = async (req, res, next) => {
    try {
        if (!req.user.isPro) {
            return res.status(403).json({ 
                message: 'Pro subscription required',
                upgradeUrl: 'https://paypal.me/Umer844'
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error checking pro status' });
    }
};

module.exports = { auth, requirePro }; 