const cors = require('cors')
const mongoose = require("mongoose");
const express = require('express');
const path = require('path');
require("dotenv").config();

const app = express();
require("dotenv").config();
require("./db/conn");

const connect = require('./db/conn')
const routes = require('./routes/routes.js')

const port = process.env.PORT || 8000;

connect()


app.use(express.json());
app.use(cors());
app.use(routes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res, next) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send("API running...");
    })
}

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
