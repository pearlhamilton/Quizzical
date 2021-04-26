const db = connect("mongodb://localhost:27017/quizzical_db");

db.posts.drop();

db.posts.insertMany([
    {
        player: "Player 1",
        score: "20",
    },
]);