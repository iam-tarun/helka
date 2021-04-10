exports.dashboard = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    res.status(200).json({
        success: true,
        data: req.user
    })
}