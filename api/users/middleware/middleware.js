
function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`)
    console.log(`Request URL: ${req.url}`)
    console.log(Date())
    next()
}

function validateUser(req, res, next) {
    const { username, password } = req.body
    if (!username || !username.trim()) {
        res.status(400).json({ message: "missing required name field" })
    } else if (!password || !password.trim()) {
        res.status(400).json({ message: "missing required field password" })
    } else {
        next()
    }
    
}

module.exports = {
    logger,
    validateUser
}