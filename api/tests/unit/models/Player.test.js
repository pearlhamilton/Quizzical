const Player = require("../../../models/Player");
const { MongoClient } = require('mongodb');

describe("Player", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

    describe("create", () => {
        test("it resolves with player on successful database query", async () => {
            const players = db.collection('players');
            let mockPlayer = { _id: 123, player: "testPlayer", score: 15 };
            await users.insertOne(mockPlayer);
            const insertedPlayer = await players.findOne({_id: '123'});
            expect(result).toBeInstanceOf(Player);
        });
    });

    // describe("all", () => {
    //     test("it resolves with players on successful db query", async () => {
    //         jest.spyOn(db, 'find', 'toArray')
    //             .mockResolvedValueOnce([{}, {}, {}]);
    //         const all = await Player.all;
    //         console.log(all);
    //         expect(all).toHaveLength(3);
    //     });
    // });

    // describe("findById", () => {
    //     test("it resolves with player on successful db query", async () => {
    //         let playerData = { id: 123, player: "testPlayer", score: 15 };
    //         jest.fn(db, "toArray")
    //             .mockResolvedValueOnce({ playerData });
    //         const result = await Player.findById("123");
    //         expect(result).toBeInstanceOf(Player);
    //     });
    // });
});