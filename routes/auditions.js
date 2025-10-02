const express = require('express');
const router = express.Router();

// @route   GET /api/auditions
// @desc    Get all open auditions
// @access  Public
router.get('/', async (req, res) => {
    try {
        // TODO: Implement fetching open auditions
        
        const auditions = [
            {
                id: '1',
                scriptTitle: 'The Last Guardian',
                role: 'Lead Voice Actor',
                description: 'Looking for a strong, commanding voice',
                deadline: '2024-12-31',
                status: 'open'
            }
        ];
        
        res.json({ auditions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   POST /api/auditions
// @desc    Create audition for a script
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { scriptId, role, description, deadline } = req.body;
        
        // TODO: Implement audition creation
        
        res.status(201).json({ 
            message: 'Audition created',
            audition: { scriptId, role, deadline }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   POST /api/auditions/:id/submit
// @desc    Submit audition entry
// @access  Private
router.post('/:id/submit', async (req, res) => {
    try {
        const { id } = req.params;
        const { videoUrl, notes } = req.body;
        
        // TODO: Implement audition submission
        
        res.status(201).json({ 
            message: 'Audition submitted',
            submission: { auditionId: id, videoUrl }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
