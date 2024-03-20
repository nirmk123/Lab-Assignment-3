import express from 'express'; // Importing Express module using ES module syntax

const app = express(); // Creating an Express application instance

const PORT = 3000; // Specifying the port number

// Route to demonstrate CREATE operation using POST method
app.post('/create', (req, res) => {
    res.send('Creating resource...'); // Sending a text response for CREATE operation
});

// Route to demonstrate UPDATE operation using PUT method
app.put('/update', (req, res) => {
    res.send('Updating resource...'); // Sending a text response for UPDATE operation
});

// Route to demonstrate DELETE operation using DELETE method
app.delete('/delete', (req, res) => {
    res.send('Deleting resource...'); // Sending a text response for DELETE operation
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`); // Logging a message indicating that the server is running
});
