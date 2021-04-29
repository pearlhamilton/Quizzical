// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

class Games {
    constructor(){
        this.games = []; 
        this.players = [];
    }
// let game = games.addGame(SOCKETID, room);
    static addGame = (hostID, roomName, difficulty, count, subject) => {
        let game = {
            host: hostID,
            room: roomName,
            difficulty: difficulty,
            count: count,
            subject: subject,
            active: false
        }
        this.games.push(game);
        console.log("game added")
        return game;
    };

    static getGameByRoom(roomName) {
        if(this.games){
            console.log(this.games)
            return this.games.filter((game) => {
                return game.room === roomName;
            })[0];
        } else {
            console.log(this.games)
            return "";
        }
        
    };

    static checkRoomName(room) {
        let game = this.getGameByRoom(room);

        if(game) {
            return false;
        } else {
            return true;
        };
    };
}


module.exports = Games;

