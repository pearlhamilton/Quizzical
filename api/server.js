const express = require("express")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const server = require("http").createServer(app);


//ROUTES
app.get('/', (req, res) => res.send("Welcome to Quizzical"))

//make server and sockets interact
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    }
  });

  io.on('connection', socket => {
    console.log(`connected to socket: ${socket.id}`);
    
    const participantCount = io.engine.clientsCount;

    // send event only to new connecting client
    socket.emit('admin-message', 'Hi there, new player')
    // send event to all other clients (not new connecting client)
    socket.broadcast.emit('admin-message', `New player has joined the room`)

    // send event to all clients
    io.emit('admin-message', `Player count: ${participantCount}`)

    socket.on('disconnect', () => {
      console.log(`Player ${socket.id} disconnected`);
    });
  });

// io.on('connection', socket => {

//     socket.on('create', (roomId) => {
//         console.log('created room', roomId)
//         socket.join(roomId);
//         io.to(roomId).emit('admin-message', `${socket.id} has joined`)
//         io.to(roomId).emit('count', io.sockets.adapter.rooms.get(roomId) ? io.sockets.adapter.rooms.get(roomId).size : 0)
//         socket.on('new-message', ({ username, message }) => {
//             io.in(roomId).emit('incoming-message', { username, message });
//         })
//         // *************************************************************************************
//         // HANDLE USER ENTERS ROOM
//         socket.on("disconnect", () => {
//             io.to(roomId).emit('count', io.sockets.adapter.rooms.get(roomId) ? io.sockets.adapter.rooms.get(roomId).size : 0)
//             io.to(roomId).emit('admin-message', `${socket.id} has left`)
//         });

//     });


// });

module.exports = server;
