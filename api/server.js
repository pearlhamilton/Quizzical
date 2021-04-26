const express = require("express")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const server = require("http").createServer(app);


//ROUTES
const playersRoutes = require('./routes/players');
const scoresRoutes = require('./routes/scores');

app.use('/players', playersRoutes);
app.use('/scores', scoresRoutes);

// Root route
app.get('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"))


//make server and sockets interact
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        }
    });


io.on('connection', socket => {
    console.log(`connected to socket: ${socket.id}`);
    console.log(`Existing socket rooms: `);
    console.log(socket.rooms);
    const participantCount = io.engine.clientsCount;

    // send event only to new connecting client
    socket.emit('admin-message', 'Hi there, new player')
    // send event to all other clients (not new connecting client)
    socket.broadcast.emit('admin-message', `New player has joined the room`)

    // send event to all clients
    // io.emit('admin-message', `Player count: ${participantCount}`);
    socket.emit('player-count', {players_count: participantCount});

    socket.on('request-join-game', ({gameId, username}) => { // needs gameId from client
        console.log(`${username} joining ${gameId}`)

        socket.join(gameId) // add User to room (creates new room if no matching room ID)
        // send event to all other Users in specific room
        socket.broadcast.to(gameId).emit('add-user', { username })

        // gather updated room data
        const roomData = io.sockets.adapter.rooms[gameId]
        const inRoomCount = roomData.length
        const inRoomIds = Object.keys(roomData.sockets)

        // send event only to User
        socket.emit('entry-permission', { gameId, players: inRoomIds})
        // send event to all other Users in specific room
        socket.to(gameId).emit('new-player-joining', { username, gameId })
        // send event to all Users in specific room
        io.in(gameId).emit('admin-message', `${inRoomCount} players now in ${gameId}!`)
    });




    socket.on('disconnect', () => {
        console.log(`Player ${socket.id} disconnected`);
    });
});

module.exports = server;
