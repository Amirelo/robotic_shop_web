const authModel = require('./model')

const bcrypt = require('bcrypt')
const saltRounds = 10

const hashPassword = (password) => {
    bcrypt.genSalt(password, saltRounds).then((salt) => {
        console.log("Salted password:", salt)
        return hash
    })
        .catch((error) => {
            console.log('Error salting password:', error)
        })
}

const checkPassword = async (saltedPass, pass) => {
    try {
        const res = await bcrypt.compare(saltedPass, pass)
        return res
    } catch (error) {
        console.log('SERVICES - Check Password Error:', error)
        return false
    }
}

exports.signInWithPassword = async (email, password) => {
    const user = await authModel.findOne({email:email})
    console.log("user:", user)
    if (user != null) {
        const status = checkPassword(password, user.password)
        if (status) {
            console.log('Login Successful')
            return user
        } else {
            console.log("Wrong username or password")
            return null
        }
    } else {
        console.log("Wrong username or password")
        return null
    }
}


exports.signUp = async (username, password, email) => {
    const hashedPassword = hashPassword(password)
    const item = new authModel({
        username: username,
        password: hashedPassword,
        email: email
    })

    return await item.save()
}

exports.changeUserPassword = async (email, password) => {
    const user = await authModel.findOne({email:email})
    if (user != null){
        const hashedPassword = hashPassword(password)
        authModel.updateOne({email: email}, {password: hashedPassword})
        console.log("SERVICES - Change User Password - Success")
        return true
    } 
        console.log("SERVICES - Change User Password - Error:", error)
        return false
}