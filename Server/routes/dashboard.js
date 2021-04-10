const express = require('express')
const protect = require('../middleware/auth')
const {dashboard} = require('../controllers/dashboard')

const router = express.Router()

router.route("").get(protect, dashboard)

module.exports = router