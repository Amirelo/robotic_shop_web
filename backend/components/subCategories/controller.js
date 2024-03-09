const subCategoryServies = require('./services')

exports.getAllSubCategories = async ()=>{
    const data = await subCategoryServies.getAllSubCategories()
    return data
}