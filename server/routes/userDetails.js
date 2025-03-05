// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { User } = require('../models/user');  // Import your Mongoose model
const mongoose = require('mongoose')
// GET item by ID
router.get('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
         
        const item = await User.findById(req.params.id)

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error('Error fetching item by ID:');
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
