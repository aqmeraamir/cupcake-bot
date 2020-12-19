module.exports = (client) => {
    let chalk = require("chalk")
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes()
    client.error = (error) => {
        console.log(time + " " + chalk.bgRed.bold("ERROR") + " " + error)
    }

    client.log = (log) => {
        console.log(time + " " + chalk.bgBlue.bold("LOG") + " " + log)
    }

    client.command = (command) => {
        console.log(time + " " + chalk.bgWhite.black.bold("COMMAND") + " " + command)
    }
}