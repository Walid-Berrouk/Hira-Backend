const fs = require('fs');
const path = require('path');

function getQuestions(req, res){
    try {
        const questions = require('../storage/signUpQuestions.json')

        res.send(questions)
    } catch (error) {
        res.writeHead(500)
        res.end("Error While extracting Sign Up Questions, please try again later")
    }
}

async function addCV(req, res) {
    try {
        let users = require('../storage/users.json')

        const { id } = req.params

        users = users.map(user => user.id == id ? {...user, ...req.body }: user )
        fs.writeFileSync(path.join(__dirname.replace("\\controllers", ""), "storage", "users.json"), JSON.stringify(users))

        console.log(req.body)
        console.log("CV Added Updated !")

        res.writeHead(200)
        res.end("CV Added Updated !")
    } catch (error) {
        res.writeHead(500)
        res.end("Error While addressing CV, please try later")
    }
}

module.exports = {
    getQuestions,
    addCV
}