// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Destructure and make sure both upload and submitFeedback are correctly imported
const { upload, submitFeedback } = feedbackController;

// POST route for submitting feedback, with multer image upload
router.post('/', upload.single('image'), submitFeedback);

// GET route to get all feedback
router.get('/', feedbackController.getAllFeedback);

// GET route to get feedback by ID
router.get('/:id', feedbackController.getFeedbackById);

// DELETE route to delete all feedback
router.delete('/', feedbackController.deleteAllFeedback);

// DELETE route to delete feedback by ID
router.delete('/:id', feedbackController.deleteFeedbackById);

// GET route for overall rating analysis
router.get('/overall-rating-analysis', feedbackController.getOverallRatingAnalysis);

// GET route for department-wise rating analysis
router.get('/department-rating-analysis', feedbackController.getDepartmentRatingAnalysis);

module.exports = router;
