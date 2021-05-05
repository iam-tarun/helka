const env = require('dotenv').config({path: "./config.env"})
const express = require('express')
const ConnectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const cors = require('cors')

const AuthRoutes = require('./routes/auth')
const DashboardRoutes = require('./routes/dashboard')
const NewsRoutes = require('./routes/news')
const BookmarkRoutes = require('./routes/bookmarks')
const profileRoutes = require('./routes/profile')

ConnectDB()

const app = express()
app.use(express.json({limit: '25mb'}))
app.use(cors())


app.use("/api/auth/", AuthRoutes)
app.use("/api/dashboard", DashboardRoutes)
app.use("/api/news/", NewsRoutes)
app.use("/api/bookmarks/", BookmarkRoutes)
app.use("/api/profile/", profileRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})