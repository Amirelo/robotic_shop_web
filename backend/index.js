const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
require('./components/products/model')


mongoose.connect('mongodb+srv://testadmin:123@robotic.33wnnsp.mongodb.net/main?retryWrites=true')
.then(() => console.log('DB connect - SUCCESS'))
.catch((error) => console.log("DB connect - ERROR:", error))

const productRouter = require('./routes/ProductRoute')
const categoryRouter = require('./routes/CategoryRoute')


const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())

app.set("view engine", "jade")

app.get('/api', (req, res) => {
    res.json({ message: "Api page" })
})

app.use('/api/product', productRouter)
app.use('/api/category', categoryRouter)

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})



app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
})