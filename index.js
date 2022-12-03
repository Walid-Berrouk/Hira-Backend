
// Modules
const express = require("express")
const cors = require('cors')
require("dotenv").config()
const jwt = require('jsonwebtoken');
const morgan = require("morgan")

// Controllers
const { getUsers, addUser, getUser, modifyUser, deleteUser } = require("./controllers/users")
const { getQuestions, addCV } = require("./controllers/signUp")
const signIn = require("./controllers/signIn")
const verifyToken = require("./middlewares/verifyToken")


// Init the app
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan())



const secretKey = process.env.secretKey

// File serving
// app.use('/static', express.static('public'))
// app.use('/private', verifyToken, (req, res, next) => {
//     jwt.verify(req.token, secretKey, (err, authData) => {
//         if (err) {
//             res.sendStatus(403)
//         } else {
//             next()
//         }
//     })
// }, express.static('private'))

// Create Route handlers

// Users
app.get('/users', getUsers)
app.post('/user', addUser)
app.get('/user/:id', getUser)
app.put('/user/:id', modifyUser)
app.delete('/user/:id', deleteUser)

// Login
app.post('/api/signIn', signIn)

// Sign Up
app.get('/questions', getUsers)
app.put('/user/:id', addCV)

// Listen on a port

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on port ${PORT}...`))