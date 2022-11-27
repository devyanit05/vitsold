const cors = require('cors')
const mongoose = require("mongoose");
const express = require('express');

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


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
