const Payment = require('../models/paymentModel');

const paymentController = {
  createPayment: async (req, res) => {
    const payment = await Payment.create(req.body);
    res.json(payment);
  },

  getPayment: async (req, res) => {
    const payment = await Payment.findByPk(req.params.id);
    res.json(payment);
  }
};

module.exports = paymentController;