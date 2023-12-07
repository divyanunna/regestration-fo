const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true, useUnifiedTopology: true });

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
});

const Student = mongoose.model('Student', studentSchema);

app.post('/register', async (req, res) => {
    const { firstName, lastName, email } = req.body;

    try {
        const newStudent = new Student({ firstName, lastName, email });
        await newStudent.save();
        res.json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 