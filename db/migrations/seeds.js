const db = connect("mongodb://localhost:27017/quizzical_db");

db.players.drop();

db.players.insertMany([
    {
        player: "Player 1",
        score: 20,
    },
]);