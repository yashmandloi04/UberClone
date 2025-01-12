const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
require('./Config/Conn')
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./Routes/AllRoutes'))

module.exports = app;