const authController = require('../components/auth/controller')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/', function (req, res, next) {
    const saltRounds = 10
    console.log("body data:", req.body)
    const password = req.body.password
    bcrypt.hash(password, saltRounds).then((salt) => {
        console.log("Salted password:", salt)
        res.status(200).json({ password: salt })
    })
        .catch((error) => {
            console.log('Error salting password:', error)
        })
})

router.post('/sign-in', async function (req, res, next) {
    const email = req.body.email
    const password = req.body.password
    const data = await authController.signInWithPassword(email, password)
    res.status(200).json(data)

})

module.exports = router

