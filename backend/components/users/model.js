const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectID = Schema.ObjectId

const userSchema = new Schema({
    id:{type: objectID},
    username:{type:String},
    email:{type:String},
    password:{type:String, select: false}
})

module.exports = mongoose.model('users', userSchema)