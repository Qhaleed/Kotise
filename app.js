const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample accounts data (you can replace it with your actual data source)
let accounts = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// // Login endpoint
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const account = accounts.find(acc => acc.username === username && acc.password === password);
//     if (account) {
//         res.json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid username or password' });
//     }
// });

// Create account endpoint
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    // Check if username is already taken
    if (accounts.find(acc => acc.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    
    // Add the new account to the accounts array
    accounts.push({ username, password });
    
    // Return a success message
    res.status(200).json({ message: 'Account created successfully' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
