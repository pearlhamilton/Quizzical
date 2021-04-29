const {Games} = require('./utils')
const games = new Games(); 


console.log("add game")
games.addGame = ("hostID", "roomName", "difficulty", "count", "subject")


console.log("add player")
games.addPlayer("username", "roomName", "hostID")

let player = games.getPlayerData("roomName")