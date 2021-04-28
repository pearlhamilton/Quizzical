const request = require("supertest");
const fs = require("fs");
const { MongoClient, ObjectId } = require("mongodb");
const { init } = require("../../dbConfig/init.js");
const app = require("../../server.js");
const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

const resetTestDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await init();
            await db.collection("players").removeMany({});
            await db.collection("players").insertMany([
                {   

                    player: "Player 1",
                    score: 1,
                },
                {
                    player: "Player 2",
                    score: 2,
                }
            ]);
            resolve("Test DB reset");
        } catch (err) {
            reject(`Test DB could not be reset: ${err} in ${err.file}`);
        }
    });
};

global.request = request;
global.app = app;
global.resetTestDB = resetTestDB;
global.port = process.env.PORT || 5000;
