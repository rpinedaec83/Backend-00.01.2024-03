const Coupon = require('../models/couponModel');

// Obtener todos los cupones
exports.getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo cupón
exports.createCoupon = async (req, res) => {
    const { code, discount } = req.body;

    try {
        const newCoupon = new Coupon({ code, discount });
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un cupón existente
exports.updateCoupon = async (req, res) => {
    const { id } = req.params;
    const { code, discount } = req.body;

    try {
        const updatedCoupon = await Coupon.findByIdAndUpdate(id, { code, discount }, { new: true });
        res.json(updatedCoupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un cupón
exports.deleteCoupon = async (req, res) => {
    const { id } = req.params;

    try {
        await Coupon.findByIdAndDelete(id);
        res.json({ message: 'Cupón eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};