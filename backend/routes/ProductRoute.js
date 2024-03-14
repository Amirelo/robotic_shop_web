const express = require('express')
const router = express.Router()

const productController = require('../components/products/controller')

router.get('/', async function (req, res, next) {
    const data = await productController.getAllProducts(40);
    res.status(200).json(data);
})

router.post('/getByCateID', async function (req, res, next) {
    const categoryID = req.body.categoryID
    const limit = req.body.limit ?? 20
    const data = await productController.getProductsByCategoryId(categoryID, limit)
    res.status(200).json(data)
})

router.post('/getBySubCateID', async function (req,res,next){
    const subCateID = req.body.subCategoryID
    const limit = req.body.limit ?? 20
    const data = await productController.getProductsBySubCategoryId(subCateID, limit)
    res.status(200).json(data)
})

module.exports = router;