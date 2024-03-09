const AuthServices = require('./services')

exports.signInWithPassword = async(email, password) =>{
    return await AuthServices.signInWithPassword(email, password)
}