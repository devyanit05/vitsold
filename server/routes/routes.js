const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const router = express.Router()


const Product = require('../models/productSchema')
const Upload = require('../models/uploadSchema')


const DataController = require('../controller/dataController')
const UploadController = require('../controller/uploadController')
const userControl = require('../controller/userController')


const { FetchUser } = require('../middleware/FetchUser')



// post products data api
router.post('/addDefault', DataController.DefaultData)

// get products data api
router.get('/getproducts', async (req, res) => {
    try {
        const productsdata = await Product.find();
        res.status(201).json(productsdata);
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
})

// router.post('/uploadproduct', DataController.addProduct)


// * User auth Routes
router.post('/signup', userControl.createUser)
router.post('/login', userControl.login)



// upload new product stuff
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/uploadproducts').post(upload.single('product_img'), (req, res) => {
    const owner_name = req.body.owner_name;
    const owner_email = req.body.owner_email;
    const product_name = req.body.product_name;
    const product_category = req.body.product_category;
    const product_mrp = req.body.product_mrp;
    const product_price = req.body.product_price;
    const product_discount = req.body.product_discount;
    const product_description = req.body.product_description;
    const product_img = req.file.filename;

    const newProductData = {
        owner_name,
        owner_email,
        product_name,
        product_category,
        product_mrp,
        product_price,
        product_discount,
        product_description,
        product_img
    }

    const newProduct = new Upload(newProductData);

    newProduct.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router