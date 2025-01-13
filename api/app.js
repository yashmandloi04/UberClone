const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
// require('./Config/Conn')
const app = express();
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', require('./Routes/AllRoutes'))

module.exports = app;