const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Data', dataSchema);