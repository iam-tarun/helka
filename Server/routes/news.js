const express = require("express");
const protect = require("../middleware/auth")
const {TopHeadlines, ChangeHeadlines} = require("../controllers/news")

const router = express.Router()

router.route("/headlines").get(protect, TopHeadlines);
router.route("/changeHeadlinesCategory").post(protect, ChangeHeadlines)

module.exports = router