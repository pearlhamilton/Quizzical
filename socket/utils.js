// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

class Games {
    constructor(){

        this.games = []; 
        this.players = [];
    }

    //  addGame = (hostID, roomName, difficulty, count, subject, results, index) => {
    addGame = (hostID, roomName, difficulty, count, subject) => {
        
        // let game = {
        //     host: hostID,
        //     room: roomName,
        //     difficulty: difficulty,
        //     count: count,
        //     subject: subject,
        //     players: [],
        //     // currentQuestion: current,
        //     // results: results,
        //     // current_question_index: index,
        //     active: false
        // }

        let game = new Game(hostID, roomName, difficulty, count, subject);

        
        this.games.push(game);
        console.log("game added, room list:")
        this.games.forEach(room => console.log(room))
        return game;
    };

    addPlayer = (username, room, hostID) => {
        let player = {
            username: username, 
            roomName: room, 
            roomID: hostID,
            score: 0
        }

        this.players.push(player);
        let game = this.games.filter(game => game.room === room);
        console.log(game.players)
        // game.players.push(player);
        return player;
    }

    filterRoom = (roomName) => {
        return this.games.room === roomName; 
    }

    // getPlayerCount = (roomName) => {
    //     console.log("check player count")
    //     const game =  this.games.filter(game => game.room === roomName);
    //     console.log(game)
    //     console.log(game.getPlayerCount)
    //     // console.log(game.players.length); 
    //     return game.players.length; 
    // }

    //check the room id
    //get player with room id
    getPlayerData = (roomName) => {
        //find room in games
        console.log("no of players")
        const game =  this.games.filter(game => {console.log(game.room === roomName); return game.room === roomName});
        // const players = this.players.filter(player => player.room === roomName)
        console.log( game.player.length)
        return game.player.length;
    }
  

    getGameByRoom(roomName) {
        console.log("Looking for room")
        console.log(roomName)
        // if(this.games){
        this.games.forEach(game => console.log(game))

        const game =  this.games.filter(game => {console.log(game.room === roomName); return game.room === roomName});
       
        return game;
    };

    checkRoomName(room) {
        let game = this.getGameByRoom(room);
        console.log(game)
        if(game.length > 0 ) {
            return false;
        } else {
            return true;
        };
    };
}

class Game {
    constructor(hostID, roomName, difficulty, count, subject ){
        this.host = hostID,
        this.room = roomName,
        this.difficulty = difficulty,
        this.count = count,
        this.subject = subject,
        this.players = [],
        // currentQuestion: current,
        // results: results,
        // current_question_index: index,
        this.active = false
    }

    addPlayer (player) {


        this.players.push(player);
        console.log(players.length)
        console.log("player added")
        return player;
    }

    getPlayerCount(roomName) {
        console.log(player.count)
        console.log(this.players.length)
        return this.players.length; 
    }
}

module.exports = {Games, Game};

