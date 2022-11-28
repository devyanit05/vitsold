const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    owner_name: {
        type: String,
        required: true,
        trim: true
    },

    owner_email: {
        type: String,
        required: true,
        trim: true
    },

    product_name: {
        type: String,
        required: true,
        trim: true
    },

    product_category: {
        type: String,
        required: true,
        trim: true
    },

    product_mrp: {
        type: String,
        required: true,
        trim: true
    },

    product_price: {
        type: String,
        required: true,
        trim: true
    },

    product_discount: {
        type: String,
        required: true,
        trim: true
    },

    product_img: {
        type: String,
        // required: true,
    },

    product_description: {
        type: String,
        required: true,
        trim: true
    },

});

uploadSchema.index({ product_name: "text", product_category: "text", product_description: "text" });

const Upload = mongoose.model('upload', uploadSchema);
module.exports = Upload;