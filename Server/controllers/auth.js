const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async (req, res, next) => {
    const {fullname, username, email, password} = req.body
    try {
        const user = await User.create({
            fullname, username, email, password
        })

        sendToken(user, 201, res)

    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    const {email, password} = req.body

    if(!email || !password){
        return next(new ErrorResponse("please provide the credentials", 400))
    }

    try {
        const user = await User.findOne({email}).select("+password")

        if(!user){
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        const isMatch = await user.validatePassword(password)
        if(!isMatch){
            return next(new ErrorResponse("Invalid credentials", 401))
        }

        sendToken(user, 200, res)

    } catch (error) {
        next(error)
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({
        success: true,
        token
    })
}

