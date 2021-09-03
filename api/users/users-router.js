const express = require('express')
const { validateUser } = require('./middleware/middleware')

const router = express.Router()

router.get('/users', (req, res) => {
    res.json([
        {
            name: "squirtle"
        },
        {
            name: "charmander"
        },
        {
            name: "bulbasaur"
        }
    ])
})

router.post('/register', validateUser, (req, res) => {
    res.json(req.body)
})

router.post('/login', validateUser, (req, res, next) => {
    res.json({
        message: `Welcome ${req.body.username}!!!`
    })
})

module.exports = router