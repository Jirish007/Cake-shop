// filepath: /c:/Users/giris/Documents/Coding projects/Frontend developer/Easy bake/backend/server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
host: 'localhost', // Replace with your MySQL host
user: 'root', // Replace with your MySQL username
password: 'password', // Replace with your MySQL password
database: 'easybake' // Replace with your MySQL database name
});

db.connect((err) => {
if (err) {
console.error('Error connecting to MySQL:', err);
return;
}
console.log('Connected to MySQL');
});

// Routes
app.post('/api/banking', (req, res) => {
const { accountName, bankName, accountNumber, branchCode, swiftCode, totalPrice } = req.body;
const query = 'INSERT INTO banking_details (accountName, bankName, accountNumber, branchCode, swiftCode, totalPrice) VALUES (?, ?, ?, ?, ?, ?)';
db.query(query, [accountName, bankName, accountNumber, branchCode, swiftCode, totalPrice], (err, result) => {
if (err) {
console.error('Error inserting data into MySQL:', err);
return res.status(500).send(err);
}
res.status(200).send('Banking details submitted successfully!');
});
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});