const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    title: Object,
    price: Object,
    description: String,
    owner: String,
    mailowner: String
});


const Product = new mongoose.model("product", productSchema);
module.exports = Product;
