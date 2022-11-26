const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const storage = require('../middleware/multer');

const router = express.Router()


const Product = require('../models/productSchema')
const Upload = require('../models/uploadSchema')


const DataController = require('../controller/dataController')
// const UploadController = require('../controller/uploadController')
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
// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if (allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// let upload = multer({ storage, fileFilter });

router.route('/uploadproducts').post(store.single('product_img'), UploadController.uploadController);

module.exports = router