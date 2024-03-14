const bannerModel = require('./model')

exports.getActiveBanner = async() => {
    
    try {
        const data = await bannerModel.find({ status: true })
    console.log("Data:", data)
    return data
    } catch (error) {
        console.log('SERVICES - Get Active Banner - Error:', error)
    }
}