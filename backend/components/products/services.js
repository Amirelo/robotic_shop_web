const productModel = require('./model')

exports.getAllProducts = async() => {
    try{
        return productModel.find({})
    } catch(error) {
        console.log('SERVICES - Get All Products - Error:', error)
    }
}