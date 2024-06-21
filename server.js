const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (including index.html) from the current directory
app.use(express.static(__dirname));

// Endpoint to handle form submissions and save messages to a JSON file
app.post('/save-message', (req, res) => {
    const { from, to, message } = req.body;
    const newMessage = { from, to, message };

    // Path to messages.json (assuming it's next to index.html)
    const messagesPath = path.join(__dirname, 'messages.json');

    // Read existing messages from the file (if any)
    let messages = [];
    try {
        const messagesFile = fs.readFileSync(messagesPath, 'utf8');
        messages = JSON.parse(messagesFile);
    } catch (error) {
        // If file doesn't exist, create an empty array
        console.error('Error reading messages file:', error);
    }

    // Add the new message to the array
    messages.push(newMessage);

    // Write updated messages back to the file
    try {
        fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));
        console.log('Message saved successfully:', newMessage);
        res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// Start server on port 3000 (or any other port you choose)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
