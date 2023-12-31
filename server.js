const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const papa = require('papaparse');
const connectDB = require('./config/dbConn');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const puppeteer = require('puppeteer');


const PORT = process.env.PORT;

connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
app.use('/', upload.single('csv'), require('./routes/root'));

app.post('/upload', require('./routes/upload'));
app.use('/invoice', require('./routes/invoice'));
app.use('/download-invoice', require('./routes/download'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})