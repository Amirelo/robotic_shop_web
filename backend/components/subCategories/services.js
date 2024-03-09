const subCategoryModel = require('./model')

exports.getAllSubCategories = async() => {
    return subCategoryModel.find({})
}