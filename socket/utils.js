// const {GameManager} = require("js-gamemanager");

// const games = new GameManager();

class Games {
    constructor(){
        this.games = []; 
        this.players = [];
    }
// let game = games.addGame(SOCKETID, room);
    addGame = (hostID, roomName, difficulty, count, subject) => {
        let game = {
            host: hostID,
            room: roomName,
            difficulty: difficulty,
            count: count,
            subject: subject,
            active: false
        }
        this.games.push(game);
        return game;
    };

    getGameByRoom(roomName) {
        return this.games.filter((game) => {
            return game.room === roomName;
        })[0];
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


module.exports = Games;

