const productModel = require('./model')

exports.getAllProducts = async (limit) => {
    try {
        return productModel.find({}).limit(limit)
    } catch (error) {
        console.log('SERVICES - Get All Products - Error:', error)
    }
}

exports.getMoreProducts = async (index) => {
    try {
        return productModel.find({}).skip(index).limit(20)
    } catch (error) {
        console.log('SERVICES - Get More Products - Error:', error)
    }
}

exports.getProductsByCategoryId = async (categoryID, limit) => {
    try {
        return await productModel.find({ categoryID: categoryID }).limit(limit)
    } catch (error) {
        console.log("SERVICES - Get Products By Category ID - Error:", error)
    }
}