const fs = require('fs');
const path = require('path');

function getOpportunities(req, res) {
    try {
        const users = require('../storage/users.json')

        const { id } = req.params

        let user = users.find(user => user.id == id)

        // Send request to AI backend to get suggestions

        // Get list of ipportunities
        const opportunities = []
        res.send(opportunities)
    } catch (error) {
        res.writeHead(500)
        res.end("Error While extracting opportunities, please try again later")
    }
}

module.exports = {
    getOpportunities
}