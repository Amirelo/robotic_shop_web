const express = require('express')
const router = express.Router()

const subCategoriesController = require('../components/subCategories/controller')

router.get('/', async function (req, res, next) {
    const data = await subCategoriesController.getAllSubCategories()
    res.status(200).json(data)
})

router.post('/getByID', async function (req, res, next) {
    const id = req.body.id
    const data = await subCategoriesController.getSubCategoriesByID(id)
    res.status(200).json(data)
})

module.exports = router