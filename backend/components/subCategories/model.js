const mongoose = require("mongoose")
const Schema = mongoose.Schema()
const objectID = Schema.objectID

const SubCategorySchema = new Schema({
    id:{type: objectID},
    name:{type: String},
    description:{type:String},
})

module.exports = mongoose.Model("subCategories", SubCategorySchema)