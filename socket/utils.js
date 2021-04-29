// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

class Games {
    constructor(){

        this.games = []; 
        this.players = [];
    }

    //  addGame = (hostID, roomName, difficulty, count, subject, results, index) => {
    addGame = (hostID, roomName, difficulty, count, subject) => {
        
        let game = {
            host: hostID,
            room: roomName,
            difficulty: difficulty,
            count: count,
            subject: subject,
            // currentQuestion: current,
            // results: results,
            // current_question_index: index,
            active: false
        }
        
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

        this.player.push(player);
        return player;
    }

    //check the room id
    //get player with room id
    getPlayerData = (roomName) => {
        //find room in games
        const players = this.players.filter(player => player.room === roomName)
        return players
    }
  

    getGameByRoom(roomName) {
        // if(this.games){
            if(this.games.length === 0){
                console.log("no rooms")
                return null
            }
            return this.games.filter((game) => {
                return game.room === roomName;
            })[0];
        // } else {
        //     console.log(this.games)
        //     return "";
        // }
        
    };



    checkRoomName(room) {
        let game = this.getGameByRoom(room);
        if(game) {
            return false;
        } else {
            return true;
        };
    };
}


module.exports = {Games};

