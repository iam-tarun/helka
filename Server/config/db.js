const mongoose = require("mongoose");



const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true
        })
        console.log("Connection to database is successfull!")
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB