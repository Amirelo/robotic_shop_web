const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    productCode: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    totalRating: { type: Number },
    discount: { type: String },
    sold: { type: Number },
    images: {type: Array},
    categoryID: { type: ObjectId, ref: 'categories' },
})

module.exports = mongoose.model('products', ProductSchema)