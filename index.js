import 'dotenv/config'; // Load environment variables first
import express from 'express';
import connectDB from './config/db.js'; // Import the DB connection function

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
// connectDB();

// Basic route
app.get('/', (req, res) => {
    res.send('API Running and should have been connected to MongoDB');
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));