const categoryModel = require('./model')

exports.getAllCategories = () => {
    try {
        return categoryModel.find({})
    } catch (error) {
        console.log("SERVICES - Get All Categories - Error:", error)
    }
}