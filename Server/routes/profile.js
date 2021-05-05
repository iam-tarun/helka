const express = require('express')
const router = express.Router()
const protect = require('../middleware/auth')
const {createProfile, updateProfile, getProfile} = require('../controllers/profile')

router.route("/profile").get(protect, getProfile)
router.route("/create").post(protect, createProfile)
router.route("/update").post(protect, updateProfile)

module.exports = router