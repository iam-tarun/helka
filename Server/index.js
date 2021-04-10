const env = require('dotenv').config({path: "./config.env"})
const express = require('express')
const ConnectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const cors = require('cors')

const AuthRoutes = require('./routes/auth')
const DashboardRoutes = require('./routes/dashboard')

ConnectDB()

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/auth/", AuthRoutes)
app.use("/api/dashboard", DashboardRoutes)


app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})