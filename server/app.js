require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const app = express();
require("./db/conn");


const connect = require('./db/conn')
const routes = require('./routes/routes.js')
const cors = require('cors')


const port = process.env.PORT || 8000;


connect()


app.use(express.json());
app.use(cors());
app.use(routes)


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
