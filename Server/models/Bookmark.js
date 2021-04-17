const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
    source: {
        id : {
            type: String,
            required: false
        },
        name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

module.exports = Bookmark;