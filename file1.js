import express from 'express'; // Importing Express module using ES module syntax

const app = express(); // Creating an Express application instance

const PORT = 3000; // Specifying the port number

// Define the group name and members
const groupName = 'Group 7';
const members = ['Nirmal Krishna', 'Iza Shamil'];

// Route for the home page ('/')
app.get('/', (req, res) => {
    // Generating HTML to display group name and members
    let html = `<h1>Group Name: ${groupName}</h1><h2>Members:</h2><ul>`;
    members.forEach(member => {
        html += `<li>${member}</li>`; // Adding each member as a list item
    });
    html += '</ul>';
    res.send(html); // Sending the HTML response to display group information
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`); // Logging a message indicating that the server is running
});
