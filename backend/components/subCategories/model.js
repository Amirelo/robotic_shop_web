const mongoose = require("mongoose")
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const SubCategorySchema = new Schema({
    id:{type: objectID},
    name:{type: String},
    description:{type:String},
    categoryID:{type:objectID}
}, {collection: "subCategories"})

module.exports = mongoose.model("subCategories", SubCategorySchema)