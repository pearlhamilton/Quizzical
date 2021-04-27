const express = require("express")
const cors = require('cors');
const app = express();
const server = require("http").createServer(app);

app.use(express.json());
app.use(cors());

//ROUTES
const playersRoutes = require('./routes/players');
const scoresRoutes = require('./routes/scores');

app.use('/players', playersRoutes);
app.use('/scores', scoresRoutes);

// Root route
app.get('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"))
app.post('/', (req, res) => res.send("Hello, world! Welcome to Quizzical\'s API!"))


//make server and sockets interact
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        }
    });

//io overall session || socket sesion branches
io.on('connection', socket => {


    // socket.emit('player-count', {players_count: participantCount});
    const participantCount = io.engine.clientsCount;
    socket.emit('player-count', {players_count: participantCount});

    socket.emit('admin-message', 'Hi there, new quizz player')

    socket.broadcast.emit('admin-message', `New quizz player has joined the room`)


    

    console.log(`connected to socket: ${socket.id}`);
    
    socket.on('pass-username', (username) => {
        console.log(`Created the quiz ${username}`)
        socket.join(username); 
        socket.username = username;

        console.log(`Existing socket rooms: `);
        console.log(socket.rooms);
    });

    

    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username
        });
    }
    socket.emit("users", users);
  // ...


    // for (const room of socket.rooms) {

    // }
    // send event only to new connecting client
  
    // send event to all other clients (not new connecting client)
    

    // send event to all clients
    // io.emit('admin-message', `Player count: ${participantCount}`);
    

   

    socket.on('join-quiz', () => {
        socket.join(socket.rooms)
    })



//     socket.on('add user', (username) => {
//         if (addedUser) return;
    
//         // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
// });


    // socket.on('request-join-game', ({gameId, username}) => { // needs gameId from client
    //     console.log(`${username} joining ${gameId}`)

    //     socket.join(gameId) // add User to room (creates new room if no matching room ID)
    //     // send event to all other Users in specific room
    //     socket.broadcast.to(gameId).emit('add-user', { username })

    //     // gather updated room data
    //     const roomData = io.sockets.adapter.rooms[gameId]
    //     const inRoomCount = roomData.length
    //     const inRoomIds = Object.keys(roomData.sockets)

    //     // send event only to User
    //     socket.emit('entry-permission', { gameId, players: inRoomIds})
    //     // send event to all other Users in specific room
    //     socket.to(gameId).emit('new-player-joining', { username, gameId })
    //     // send event to all Users in specific room
    //     io.in(gameId).emit('admin-message', `${inRoomCount} players now in ${gameId}!`)
    // });




    socket.on('disconnect', () => {
        socket.broadcast.emit('user-left', `${socket.username} left`);
        console.log(`Player ${socket.id} disconnected`);
        
    });
});



module.exports = server;
