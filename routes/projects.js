const express = require('express');
const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        // TODO: Implement fetching projects from database
        const projects = [
            {
                id: '1',
                title: 'Epic Space Battle',
                type: 'video',
                description: 'Sci-fi short film. Looking for sound effects and music.',
                author: 'demo-user',
                collaborators: []
            },
            {
                id: '2',
                title: 'Neon Dreams',
                type: 'art',
                description: 'Cyberpunk character concept art collection.',
                author: 'demo-user',
                collaborators: []
            }
        ];
        
        res.json({ projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { title, type, description, royaltyRate } = req.body;
        
        // TODO: Implement project creation
        
        res.status(201).json({ 
            message: 'Project created successfully',
            project: { title, type, description, royaltyRate }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// @route   GET /api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // TODO: Implement fetching single project
        
        res.json({ 
            project: {
                id,
                title: 'Demo Project',
                description: 'This is a demo project'
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
