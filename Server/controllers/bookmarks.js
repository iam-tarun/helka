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

exports.removeBookmarks = async (req, res, next) => {
   try {
    const {id} = req.body
    await Bookmark.findOneAndRemove({_id:id})

    res.status(200).json({
        success: true,
    })
   } catch (error) {
      next(error) 
   }
}

exports.removeAll = async (req, res, next) => {
    try {
        const user = req.user
        await Bookmark.remove({user:user._id})
        res.status(200).json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}