const Upload = require("../models/uploadSchema");


exports.uploadController = (req, res) => {
    const owner_name = req.body.owner_name;
    const owner_email = req.body.owner_email;
    const product_name = req.body.product_name;
    const product_category = req.body.product_category;
    const product_mrp = req.body.product_mrp;
    const product_price = req.body.product_price;
    const product_discount = req.body.product_discount;
    const product_img = req.file.filename;
    const product_description = req.body.product_description;

    const newProductData = new Upload({
        owner_name,
        owner_email,
        product_name,
        product_category,
        product_mrp,
        product_price,
        product_discount,
        product_img,
        product_description,

    })

    // const newProduct = new Upload(newProductData);

    newProductData.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
}

// module.exports = uploadController;