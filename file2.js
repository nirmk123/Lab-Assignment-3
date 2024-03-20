import express from 'express'; // Import Express module using ES module syntax
import bikesData from './data/bikes.json' assert { type: 'json' };

const app = express(); // Creating an Express application instance

const PORT = 3000; // Specifying the port number

// Route to display JSON contents about bikes
app.get('/bikes', (req, res) => {
    res.json(bikesData); // Sends the JSON data about bikes as a response
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
