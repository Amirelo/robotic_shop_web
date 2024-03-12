const subCategoryServies = require('./services')

exports.getAllSubCategories = async ()=>{
    const data = await subCategoryServies.getAllSubCategories()
    return data
}

exports.getSubCategoriesByID = async (id) => {
    const data =await subCategoryServies.getSubCategoriesByID(id)
    return data
}