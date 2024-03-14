const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
require('./components/products/model')


mongoose.connect('mongodb+srv://testadmin:123@robotic.33wnnsp.mongodb.net/main?retryWrites=true')
    .then(() => console.log('DB connect - SUCCESS'))
    .catch((error) => console.log("DB connect - ERROR:", error))

const authRouter = require('./routes/AuthRoute')
const productRouter = require('./routes/ProductRoute')
const categoryRouter = require('./routes/CategoryRoute')
const subCategoryRouter = require('./routes/subCategoryRoute')
const bannerRouter = require('./routes/BannerRoute')


const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "jade")

app.get('/api', (req, res) => {
    res.json({ message: "Api page" })
})

app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)
app.use('/api/sub_category', subCategoryRouter)
app.use('/api/banner', bannerRouter)

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})



app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
})