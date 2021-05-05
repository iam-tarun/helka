const express =  require('express');
const protect = require('../middleware/auth')
const {addBokmark, getBookmarks, removeBookmarks, removeAll} = require('../controllers/bookmarks')

const router = express.Router()

router.route('/addBookmark').post(protect, addBokmark)
router.route('/getBookmarks').get(protect, getBookmarks)
router.route('/removeBookmark').post(protect, removeBookmarks)
router.route('/removeall').get(protect, removeAll)

module.exports = router