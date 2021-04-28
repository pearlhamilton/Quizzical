const { MongoClient } = require("mongodb");

describe("Player", () => {
    let connection;
    let db;

    beforeAll(async () => {
        
        connection = await MongoClient.connect(process.env.MONGODB_URI
        );
        console.log(connection)
        db = await connection.db(process.env.DB_NAME);
        console.log(db)
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    test("it resolves with player on successful database query", async () => {
        const players = db.collection("players");
        let mockPlayer = { _id: 123, player: "testPlayer", score: 15 };
        await players.insertOne(mockPlayer);
        const insertedPlayer = await players.findOne({ _id: "123" });
        expect(insertedPlayer).toEqual(mockPlayer);
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
// });
