const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authenticate = require('../passport/authMiddleware');

router.post('/', authenticate, paymentController.createPayment);
router.get('/', authenticate, paymentController.getPayments);
router.get('/:id', authenticate, paymentController.getPayment);
router.put('/:id', authenticate, paymentController.updatePayment);
router.delete('/:id', authenticate, paymentController.deletePayment);

module.exports = router;