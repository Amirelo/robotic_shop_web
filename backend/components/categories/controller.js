const categoryServices = require('./services')

exports.getAllCategories = async () => {
    const data = await categoryServices.getAllCategories()
    return data;
}