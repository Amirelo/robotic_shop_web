const express = require('express')
const router = express.Router()

const subCategoriesController = require('../components/subCategories/controller')

router.get('./sub_categories', async function (req,res,next) {
    const data = await subCategoriesController.getAllSubCategories()
    res.status(200).json(data)
})