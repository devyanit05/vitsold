const mongoose = require("mongoose");
const DefaultData = require('../defaultdata');


const DB = process.env.DATABASE;
const mongoConnect = () => {
    mongoose.connect(DB).then(() => {
        console.log("db connected")
    }).catch((error) => { console.log(error.message) });
}

module.exports = mongoConnect;