const Product = require('../models/productModel');

const productController = {
  getAllProducts: async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
  },

  createProduct: async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
  },

  updateProduct: async (req, res) => {
    const product = await Product.update(req.body, { where: { id: req.params.id } });
    res.json(product);
  },

  deleteProduct: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  }
};

module.exports = productController;