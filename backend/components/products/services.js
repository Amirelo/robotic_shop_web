const productModel = require('./model')

exports.getAllProducts = async() => {
    try{
        return productModel.find({}).limit(40)
    } catch(error) {
        console.log('SERVICES - Get All Products - Error:', error)
    }
}

exports.getMoreProducts = async(index) => {
    try{
        return productModel.find({}).skip(index).limit(20)
    }catch(error){
        console.log('SERVICES - Get More Products - Error:', error)
    }
}