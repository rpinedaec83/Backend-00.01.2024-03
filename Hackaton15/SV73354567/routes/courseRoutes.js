const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authenticate = require('../passport/authMiddleware');

router.post('/', authenticate, courseController.createCourse);
router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourse);
router.put('/:id', authenticate, courseController.updateCourse);
router.delete('/:id', authenticate, courseController.deleteCourse);

module.exports = router;