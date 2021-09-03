require('dotenv').config()
const express = require('express')
const usersRouter = require('./api/users/users-router')
const cors = require('cors')

const PORT = process.env.PORT

const server = express() 

server.use(express.json())
server.use(cors())

server.use('/api', usersRouter)
server.get('/api', (req, res) => {
    res.json({ message: 'web 45 rulez'})
})

server.get('/', (req, res) => {
    res.send(`<h1>You made it here!</h1>`)
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})