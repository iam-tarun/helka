const Bookmark = require('../models/Bookmark');

exports.addBokmark = async (req, res, next) => {
    const {source, author, title, description, url, urlToImage, publishedAt, content} = req.body;
    const user = req.user

    try {
        
        const bookmark = await Bookmark.create({
            source,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
            user : user._id 

        })

        res.status(201).json({
            success: true,
            data: bookmark
        })

    } catch (error) {
        next(error)   
    }

}

exports.getBookmarks = async (req, res, next) => {
    const user = req.user

    try {
        const bookmarks = await Bookmark.find({user:user._id})

        res.status(200).json({
            success: true,
            data: bookmarks
        })

    } catch (error) {
        next(error)
    }
}