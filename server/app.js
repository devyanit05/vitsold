const cors = require('cors')
const mongoose = require("mongoose");
const express = require('express');


const app = express();
require("./db/conn");
require("dotenv").config();

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
