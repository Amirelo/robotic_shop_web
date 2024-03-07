const express = require('express')
const router = express.Router()

const productController = require('../components/products/controller')

router.get('/', async function (req,res,next){
    const data = await productController.getAllProducts();
    res.status(200).json(data);
})

module.exports = router;