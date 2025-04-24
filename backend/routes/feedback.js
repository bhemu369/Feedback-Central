import express from 'express';
import Feedback from '../models/feedback.js';

const router = express.Router();

// GET all feedback
router.get('/feedbacks', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
    }
});

// POST new feedback
router.post('/submit-feedback', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Simple validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
});

export default router; 