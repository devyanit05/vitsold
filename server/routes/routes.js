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
        // console.log(productsdata);

        // .then(() => {
        //     console.log("data found");
        //     console.log(productsdata);
        //     // res.status(200)
        //     res.send("done")
        // }).catch((err) => {
        //     console.log(err.message)
        //     res.send(err.message)
        // });
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
})





module.exports = router