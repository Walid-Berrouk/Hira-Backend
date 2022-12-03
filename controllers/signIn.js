const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require("dotenv").config()

const secretKey = process.env.secretKey

async function signIn(req, res) {
    try {
        let users = require('../storage/users.json');

        let isValid = false
        let user = users.find(user => user.username == req.body.username)

        if (user) {
            const check = await bcrypt.compare(req.body.password, user.password)

            if (check) {
                jwt.sign({username: req.body.username, password: req.body.password}, secretKey, (err, token) => {
                    res.send({
                        token
                    })

                    console.log(token);
                })
            }
        } else {
            console.log("Invalid Username")
            res.writeHead(404)
            res.end()
        }




    } catch (error) {
        res.writeHead(500)
        res.end("Error While signIn in, please try later")
    }
}

module.exports = signIn