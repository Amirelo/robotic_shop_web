const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const CategorySchema = new Schema({
    id: { type: objectID },
    name: { type: String },
    image: { type: String }
})

module.exports = mongoose.model('categories', CategorySchema)