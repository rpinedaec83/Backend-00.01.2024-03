const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  portada: { type: String },
  valor: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);