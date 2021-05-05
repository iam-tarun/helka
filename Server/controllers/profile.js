const Profile = require('../models/Profile')

exports.createProfile = async (req, res, next) => {
    try {
        const {phoneNumber, desc, photo} = req.body
        const user = req.user

        const profile = await Profile.create({
            phoneNumber,
            desc,
            photo,
            user:user._id
        })
        
        res.status(201).json({
            success: true,
            data: profile,
        })

    } catch (error) {
        next(error)
    }
}

exports.updateProfile = async (req, res, next) => {
    try {
        const {phoneNumber, desc, photo} = req.body
        const user = req.user
        const {id} = req.body

        const profile = await Profile.findByIdAndUpdate({_id:id}, {phoneNumber, desc, photo, user:user._id})
        res.status(200).json({
            success:true,
            data: profile,
        })
    } catch (error) {
        next(error)
    }
}

exports.getProfile = async (req, res, next) => {
    try {
        const user = req.user
        const profile = await Profile.find({user: user._id})
        res.status(200).json({
            success: true,
            data: profile
        })
    } catch (error) {
        next(error)
    }
} 