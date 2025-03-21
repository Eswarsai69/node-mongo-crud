const Person = require('../models/person');

// GET /person - Get all people
const getPeople = async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /person - Create a new person
const createPerson = async (req, res) => {
    const { name, age, gender, mobile } = req.body;
    try {
        const person = new Person({ name, age, gender, mobile });
        await person.save();
        res.status(201).json({ message: 'Person created successfully', person });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT /person/:id - Update a person by ID
const updatePerson = async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, mobile } = req.body;
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            id,
            { name, age, gender, mobile },
            { new: true }
        );
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json({ message: 'Person updated successfully', updatedPerson });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE /person/:id - Delete a person by ID
const deletePerson = async (req, res) => {
    const { id } = req.params;
    try {
        const person = await Person.findByIdAndDelete(id);
        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
};