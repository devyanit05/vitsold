const express = require('express');
const router = new express.Router()
const Product = require('../models/productSchema')
const DataController = require('../controller/dataController')

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

router.post('/uploadproduct', DataController.addProduct)





module.exports = router