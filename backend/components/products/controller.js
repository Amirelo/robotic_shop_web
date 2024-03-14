const productService = require('./services')

exports.getAllProducts = async () => {
    const data = await productService.getAllProducts();
    return data;
}

exports.getMoreProducts = async() => {
    const data = await productService.getMoreProducts();
    return data
}

exports.getProductsByCategoryId = async(categoryID, limit) => {
    const data = await productService.getProductsByCategoryId(categoryID, limit)
    return data
}

exports.getProductsBySubCategoryId = async(subCateID, limit) => {
    const data = await productService.getProductsBySubCategoryId(subCateID, limit)
    return data
}