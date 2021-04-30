// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

class Games {
    constructor() {

        this.games = []; 
        this.players = [];
    }

    addGame (hostID, roomName, difficulty, count, subject) {
                let game = {
                    host: hostID,
                    room: roomName,
                    difficulty: difficulty,
                    count: count,
                    subjects: subject,
                    players: [],
                    active: false
                }
        
                // let game = new Game(hostID, roomName, difficulty, count, subject);
                this.games.push(game);
                console.log("game added, room list:")
                this.games.forEach(room => console.log(room))
                return game;
    }
        
    addPlayer (username, room, hostID) {
        console.log("add player method")
        let player = {
            username: username, 
            roomName: room, 
            roomID: hostID,
            score: 0
        }

        this.players.push(player);
        let game = this.games.find( y => y.room == room);
        game.players.push(player);
        return player;
    }

    getPLayersForGame(roomName) {

        //get all players
    }


    filterRoom (roomName) {
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
    getPlayerData (roomName) {
        //find room in games
        console.log("player data")
        // const game =  this.games.filter(game => game.room === roomName);
        let game = this.games.find( y => y.room == roomName);
        console.log(game)
        // const players = this.players.filter(player => player.room === roomName)
        if(game === undefined ){
            return "error"
        }
        return game.players;
    }

    addScore(room, username, score){
        //find the game
        let game = this.games.find( y => y.room == room);
        //in the room find the player usernmae
        console.log(game)
        console.log(username)
        try{
            let player = game.players.find(p => p.username === username)
        
            //and add the score
            player.score = score; 
            //return all player scores for the gamae getPlayerData()
            return game.players
        }
        catch (err) {
            console.log("add score has : " + err)
            return { err: error }   
        }
    }
  
    getGame (roomName){
        let game = this.games.find( y => y.room == roomName);
        return game;

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

