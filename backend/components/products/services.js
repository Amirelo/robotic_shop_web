const productModel = require('./model')

exports.getAllProducts = async() => {
    try{
        return productModel.find({})
    } catch(error) {
        console.log('error', error)
    }
}