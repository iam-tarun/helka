const express =  require('express');
const protect = require('../middleware/auth')
const {addBokmark, getBookmarks} = require('../controllers/bookmarks')

const router = express.Router()

router.route('/addBookmark').post(protect, addBokmark)
router.route('/getBookmarks').get(protect, getBookmarks)

module.exports = router