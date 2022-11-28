const express = require('express');
const multer = require('multer');
let path = require('path');
const storage = require('../middleware/multer');

const router = express.Router()


const Product = require('../models/productSchema')
const Upload = require('../models/uploadSchema')


const DataController = require('../controller/dataController')
const UploadController = require('../controller/uploadController')
const userControl = require('../controller/userController')
const searchControl = require('../controller/searchController')


const { FetchUser } = require('../middleware/FetchUser')



// post products data api
router.post('/addDefault', DataController.DefaultData)

// get products data api
router.get('/getproducts', async (req, res) => {
    try {
        const productsdata = await Upload.find();
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
router.route('/uploadproducts').post(store.single('product_img'), UploadController.uploadController);

// search for products
router.post('/search', searchControl.searchProduct);


module.exports = router