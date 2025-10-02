const express = require('express');
const router = express.Router();

// @route   GET /api/funding
// @desc    Get all funding applications
// @access  Public
router.get('/', async (req, res) => {
    try {
        // TODO: Implement fetching funding applications
        
        const applications = [
            {
                id: '1',
                title: 'Animated Short Film',
                creator: 'demo-user',
                requestedAmount: 2500,
                tier: 'Growing Dreams',
                votes: 45,
                status: 'voting'
            }
        ];
        
        res.json({ applications });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   POST /api/funding
// @desc    Submit funding application
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { title, description, requestedAmount, tier } = req.body;
        
        // TODO: Implement funding application submission
        
        res.status(201).json({ 
            message: 'Funding application submitted',
            application: { title, requestedAmount, tier }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   POST /api/funding/:id/vote
// @desc    Vote for a funding application
// @access  Private
router.post('/:id/vote', async (req, res) => {
    try {
        const { id } = req.params;
        
        // TODO: Implement voting logic
        
        res.json({ 
            message: 'Vote recorded',
            applicationId: id
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
