const Order = require('../models/orderModel');

// Obtener todas las órdenes
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva orden
exports.createOrder = async (req, res) => {
    const { customer, course, amount } = req.body;

    try {
        const newOrder = new Order({ customer, course, amount });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una orden existente
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { customer, course, amount } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { customer, course, amount }, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una orden
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        await Order.findByIdAndDelete(id);
        res.json({ message: 'Orden eliminada exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};