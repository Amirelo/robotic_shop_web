const subCategoryModel = require('./model')

exports.getAllSubCategories = () => {
    try {
        console.log("GEt all sub")
        return subCategoryModel.find({})
    } catch (error) {
        console.log("SERVICES - Get All Sub Categories - Error:", error)
    }
}

exports.getSubCategoriesByID = (id) => {
    return subCategoryModel.find({categoryID: id})
}