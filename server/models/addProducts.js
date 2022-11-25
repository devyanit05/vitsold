

const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: String,
    Category: String,
    mrp: Number,
    cost: Number,
    discount: Number,
    description: String,
    owner: String,
    mailowner: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

});

//Image is a model which has a schema imageSchema

const project = new mongoose.model('Image', imageSchema);
module.exports = project;