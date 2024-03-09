const productService = require('./services')

exports.getAllProducts = async () => {
    const data = await productService.getAllProducts();
    return data;
}

exports.getMoreProducts = async() => {
    const data = await productService.getMoreProducts();
    return data
}