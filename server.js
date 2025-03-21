const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const personRoutes = require('./routes/personRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/api', personRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Node.js + MongoDB CRUD API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));