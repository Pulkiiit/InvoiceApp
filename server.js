const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const papa = require('papaparse');
const connectDB = require('./config/dbConn');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const PORT = process.env.PORT;

connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', upload.single('csv'), require('./routes/root'));

app.post('/upload', require('./routes/upload'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})