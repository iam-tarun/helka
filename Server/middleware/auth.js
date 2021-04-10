const jwt = require('jsonwebtoken')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

const protect = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
                // Bearer token = authorization header format
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token) {
        return next(new ErrorResponse("this route is only for authorised personnel", 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById({_id:decoded.id})

        if(!user){
            return next(new ErrorResponse("Authorized personnel only!!", 404))
        }
        req.user = user
        next()
    } catch (error) {
        return next(new ErrorResponse("Not authorized to access this route", 401))
    }
}

module.exports = protect