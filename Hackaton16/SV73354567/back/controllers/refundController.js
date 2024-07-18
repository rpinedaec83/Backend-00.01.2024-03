const Refund = require('../models/refundModel');

const refundController = {
  createRefund: async (req, res) => {
    const refund = await Refund.create(req.body);
    res.json(refund);
  },

  getRefund: async (req, res) => {
    const refund = await Refund.findByPk(req.params.id);
    res.json(refund);
  }
};

module.exports = refundController;