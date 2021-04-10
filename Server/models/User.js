const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please provide first name"]
    },
    username: {
        type: String,
        required: [true, "Please provide a username"]
    },
    email:{
        type: String,
        unique: true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            "Please provide a valid email"
        ]
    },
    password:{
        type: String,
        required: [true, "You must have a password"],
        minlength: 8,
        select: false
    }
})

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.methods.validatePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

const User = mongoose.model("User", userSchema)

module.exports = User