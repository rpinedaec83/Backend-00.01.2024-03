const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');
const authenticate = require('../passport/authMiddleware');

router.post('/', authenticate, couponController.createCoupon);
router.get('/', couponController.getCoupons);
router.get('/:id', couponController.getCoupon);
router.put('/:id', authenticate, couponController.updateCoupon);
router.delete('/:id', authenticate, couponController.deleteCoupon);

module.exports = router;