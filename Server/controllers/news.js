const NewsAPI = require("newsapi");

exports.TopHeadlines = async (req, res, next) => {
    const newsapi = new NewsAPI(process.env.NEWSAPI_KEY);

    try {

        const response = await newsapi.v2.topHeadlines({
            language: 'en',
            country: 'in'
        })

        return res.status(200).json({
            success: true,
            data: response.articles
        })
        
    } catch (error) {
        next(error)
    }
}

exports.ChangeHeadlines = async (req, res, next) => {

    const newsapi = new NewsAPI(process.env.NEWSAPI_KEY);
    const {category, country} = req.body
    try {
        const response = await newsapi.v2.topHeadlines({
            language: 'en',
            country,
            category,
        })

        return res.status(200).json({
            success: true,
            data: response.articles
        })

    } catch (error) {
        
        next(error)
    }
}

exports.channels = async (req, res, next) => {

    const newsapi = new NewsAPI(process.env.NEWSAPI_KEY);
    try {
        const response = await newsapi.v2.sources()

        return res.status(200).json({
            success: true,
            data: response.sources
        })
    } catch (error) {
        next(error)
    }

}