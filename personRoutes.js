const express = require('express');
const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/personController');

const router = express.Router();

// API Routes
router.get('/person', getPeople);    // Get all people
router.post('/person', createPerson);  // Add a new person
router.put('/person/:id', updatePerson);  // Update a person by ID
router.delete('/person/:id', deletePerson);  // Delete a person by ID

module.exports = router;