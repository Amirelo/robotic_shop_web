const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const CartSchema = new Schema({
    id:{type: objectID},
    quantity:{type:Number},
    productID:{type: objectID, ref:'products'},
    userID: {type: objectID, ref: 'users'}
})

module.exports = mongoose.model('carts', CartSchema)