const productService = require('./services')

exports.getAllProducts = async () => {
    const data = await productService.getAllProducts();
    return data;
}