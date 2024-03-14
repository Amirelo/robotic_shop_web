const bannerService = require('./services')

exports.getActiveBanner = async() => {
    const data = await bannerService.getActiveBanner()
    return data
}