const Course = require('../models/courseModel');

// Obtener todos los cursos
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
    const { name, description, image, price } = req.body;

    try {
        const newCourse = new Course({ name, description, image, price });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un curso existente
exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price } = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, { name, description, image, price }, { new: true });
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un curso
exports.deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        await Course.findByIdAndDelete(id);
        res.json({ message: 'Curso eliminado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};