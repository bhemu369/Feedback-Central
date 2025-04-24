import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import feedbackRoutes from './routes/feedback.js';

// Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://adarsh3699:adarsh123@cluster0.6gfam.mongodb.net/feedback-app';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', feedbackRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
}); 