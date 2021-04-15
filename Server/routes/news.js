const express = require("express");
const protect = require("../middleware/auth")
const {TopHeadlines, ChangeHeadlines, channels, search} = require("../controllers/news")

const router = express.Router()

router.route("/headlines").get(protect, TopHeadlines);
router.route("/changeHeadlinesCategory").post(protect, ChangeHeadlines)
router.route("/channels").get(protect, channels)
router.route("/search").post(protect, search)

module.exports = router