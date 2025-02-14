// filepath: /c:/Users/giris/Documents/Coding projects/Frontend developer/Easy bake/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://girishtibatina:girishtibatina@easybake.1lw5u.mongodb.net/';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Banking details schema
const bankingSchema = new mongoose.Schema({
    accountName: String,
    bankName: String,
    accountNumber: String,
    branchCode: String,
    swiftCode: String,
    totalPrice: Number
});

const Banking = mongoose.model('Banking', bankingSchema);

// Routes
app.post('/api/banking', (req, res) => {
    const newBanking = new Banking(req.body);
    newBanking.save((err, banking) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(banking);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});