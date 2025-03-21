const mongoose = require('mongoose');

// Define Person schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    mobile: { type: String, required: true }
});

// Create and export the model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;