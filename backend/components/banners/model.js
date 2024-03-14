const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const BannerSchema = new Schema({
    id: { type: objectID },
    title: { type: String },
    description: { type: String },
    status: { type: Boolean }
})

module.exports = mongoose.model('banners', BannerSchema)