const express = require('express')
const router = express.Router()

const bannerController = require('../components/banners/controller')

router.get('/', async(req, res, next) => {
    const data = await bannerController.getActiveBanner()
    res.status(200).json(data)
})

module.exports = router