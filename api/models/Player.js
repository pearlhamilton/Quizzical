const { init } = require("../dbConfig/init");
const { ObjectId } = require("mongodb");

class Player {
    constructor(data) {
        this.id = data.id;
        this.player = data.player;
        this.score = data.score;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const playersData = await db
                    .collection("players")
                    .find()
                    .toArray();
                const players = playersData.map(
                    (p) => new Player({ ...p, id: p._id })
                );
                resolve(players);
            } catch (err) {
                reject(`Error retrieving players: ${err}`);
            }
        });
    }

    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                let playerData = await db
                    .collection("players")
                    .find({ _id: ObjectId(id) })
                    .toArray();
                let player = new Player({
                    ...playerData[0],
                    id: playerData[0]._id,
                });
                resolve(player);
            } catch (err) {
                reject("Player not found");
            }
        });
    }

    static create(playerData) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(playerData);
                const db = await init();
                const sendPlayer = await db
                    .collection("player")
                    .insertOne({ ...playerData, date: new Date() });
                resolve(sendPlayer.ops[0]._id);
            } catch (err) {
                reject("Error creating player");
            }
        });
    }

    update(score) {
        return new Promise(async (resolve, reject) => {
            try {
            } catch (err) {
                reject(`Error updating score: ${err}`);
            }
        });
    }
}

module.exports = Player;
