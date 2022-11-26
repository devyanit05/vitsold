const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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


const Product = new mongoose.model("product", productSchema);
module.exports = Product;
