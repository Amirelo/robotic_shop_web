const express = require('express')
const router = express.Router()

const categoryController = require('../components/categories/controller')

router.get('/', async function(req,res,next){
    const data = await categoryController.getAllCategories();
    res.status(200).json(data)
})

module.exports = router