// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', () => { /* … */ });
// server.listen(3000);
const {Games, Game} =require('./utils') 
const server = require('http').createServer();
//make server and sockets interact
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});

const games = new Games();


io.on('connection', (socket) => {

    console.log(`Connection to the socket: ${socket.id} has been made`);
   
    socket.emit('assign-id', { id: socket.id});

    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: socket.username
        });
    };

    const participantCount = io.engine.clientsCount;

    console.log(participantCount)
    // socket.emit("users", participantCount);
    socket.emit("users", participantCount);
    socket.broadcast.emit("users", participantCount);
    // console.log(users);

    socket.on("check-room", (roomName, callback) => {
        console.log("CLIENT REQUEST TO CREATE ROOM WITH " ,  roomName)
        if (games.checkRoomName(roomName)) {
            callback({code: "success",
                    message: `SUCCESS: Created room with name ${roomName}`
                }); 
        } else {
            callback({code: "ERROR",
                      message: `Room name ${roomName} is taken. Please try another name.`
                    })
        }
    });

    socket.on('add-config', (config, cb) => {
        /// TODO see ticket # 80 
        // games.addGame(config.host, config.room, config.difficulty, config.count, config.subject, config.results, config.current_question_index, config.score );
        games.addGame(config.host, config.room, config.difficulty, config.count, config.subject );
        socket.join(config.host)

        games.addPlayer(config.username, config.room, config.host)

       

        cb({
            code: "success",
            message: `SUCCESS: configuration has been added`
        }); 
    })

    // console.log(io.sockets.adapter.rooms['gX4SRDHpAT8Lk9p7AAAF'])

    socket.on('join-room', (config, cb) => {
        let existingGame = games.getGameByRoom(config.room);
   
        if(existingGame.active){
            //check room capacity
            //getroom id from room name
            // if (numClients == 0){
            //     socket.join(room);
            //     socket.emit('created', room);
            // if (numClients == 1) {
            //     io.sockets.in(room).emit('join', room);
            //     socket.join(room);
            //     socket.emit('joined', room);
            //   } else { // max two clients
            //     socket.emit('full', room);
            //   }

            return cb({
                code: "ERROR",
                message: `Cannot join room ${config.room}. Game has already started.`
            });

        } else {
            // console.log(games.getPlayerCount())
            // if(existingGame.getPlayerCount <= 4){
                //check username
                console.log("adding player")
                games.addPlayer( config.username, config.room, socket.id);
                socket.join(config.room);
                socket.emit(`${config.username} has joined the room`);
                let game = games.getGameByRoom(config.room);
                cb({
                    code: "success",
                    player: config.username, 
                    score: 0 
                });

                io.to(game.host).emit("player-connected", { 
                    name: config.username, 
                    score: 0 
                });
                
            // } else {
            //     return cb({
            //         code: "ERROR",
            //         message: `Room: ${config.room} is full.`
            //     });
            // }
        }
           
    })
    
    let gamePlayers; 
    let roomNameVar; 
    socket.on('game-players', (roomName, cb) => {
        const data = games.getPlayerData(roomName)
        console.log("Player data")
        console.log(data)
        gamePlayers = data
        roomNameVar = roomName
        // io.to(roomName).emit('data', data);

        // socket.on('chat-message', (message) => {
        //     const messageData = chatMessage(message, socket);
        //     console.log(messageData);
        io.in(roomName).emit(data);
        // })

        cb(
            data
        )

    })

    io.to(roomNameVar).emit('game-players');

    socket.on('game-start', (roomName) => {
        console.log("game started")

        // cb(
        //     {response: true}
        // )
        io.to(roomName).emit('game-start', true)
    });
    
    // socket.broadcast.emit("game-players", gamePlayers);
   
    socket.on('get-questions',  (roomName, cb) => {
        const data = games.getGame(roomName)
        console.log(data);
        cb(
            data
        )

    })

    // let scores = []

    socket.on('score',  (config, cb) => {
        console.log("SCORE RETALIATION")
        //get data
        // scores.push(config.score)
        let scores =  games.addScore(config.room, config.username, config.score)
        console.log(scores)
        io.to(config.room).emit('score', scores)

        cb({
            code: "success",
            scores: scores
        })
    });
    
         



    // socket.emit('get-player-data', (roomID, cb) => {
    //     //get room
    //     //get score
    //     let playerScore = games.getPlayerData(roomID);

    //     cb({
    //         code: "success",
    //         score: playerScore
    //     }); 
    // })

    socket.on('disconnect', () => {
        socket.broadcast.emit("users", participantCount);
        socket.broadcast.emit('user-left', `${socket.username} left`);
     
        console.log(`Player ${socket.id} disconnected`);
   
    })

});

module.exports = server;




    // let users = {}; 
    // users[socket.id] = socket; // store socket for later use
   

    // socket.on('subscribeToTimer', (interval) => {
    //     console.log('client is subscribing to timer with interval ', interval);
    //     setInterval(() => {
    //         socket.emit("users", users);
    //     }, interval);
    //   });

    


    
   

    // socket.on('pass-username', (username) => {
    //     console.log(`Created the quiz ${username}`)
    //     // socket.join(username); 
    //     socket.username = username;

    //     console.log(`Existing socket rooms: `);
    //     console.log(socket.rooms);
    // }),

    // socket.broadcast.emit('admin-message', `New quizz player has joined the room`),
    // socket.emit('admin-message', 'Welcome to the quizz, live!');

    // socket.emit('player-count', {players_count: participantCount});
    // const participantCount = io.engine.clientsCount;
    // socket.emit('player-count', {players_count: participantCount});
    
   

    // socket.on('request-join', ({quizzId: roomId, username}) => {
    //     console.log(`${username} joining ${roomId}`)

    //     const roomData = io.sockets.adapter.rooms.get(room);
    //     console.log(roomData);
        
    //     socket.join(roomId) // add User to room (creates new room if no matching room ID)
    //     // send event to all other Users in specific room
    //     socket.broadcast.to(roomId).emit('add-user', { username })

    //     // gather updated room data
    //     // const roomData = io.sockets.adapter.rooms[roomId]
    //     const inRoomCount = roomData.length
    //     const inRoomIds = Object.keys(roomData.sockets)

    //     // send event only to User
    //     socket.emit('entry-permission', { quizzId: roomId, players: inRoomIds})
    //     // send event to all other Users in specific room
    //     socket.to(roomId).emit('new-player-joining', { username, quizzId: roomId })
    //     // send event to all Users in specific room
    //     io.in(roomId).emit('admin-message', `${inRoomCount} players now in ${roomId}!`)
    // })
    

    // for (const room of socket.rooms) {

    // }
    // send event only to new connecting client
  
    // send event to all other clients (not new connecting client)
    

    // send event to all clients
    // io.emit('admin-message', `Player count: ${participantCount}`);
    

   

    // socket.on('join-quiz', () => {
    //     socket.join(socket.rooms)
    // })



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





// io.on('connection', socket => {
//     console.log("'Ello, who's this we got here?")

//     // get total number of connections
//     const participantCount = io.engine.clientsCount
//     // send event only to connecting User
//     socket.emit('admin-message', 'Hi there, new friend!')
//     // send event to all others Users 
//     socket.broadcast.emit('admin-message', `A new friend has arrived!`)
//     // send event to all Users
//     io.emit('admin-message', `There is ${participantCount} x friend here now!`)

//     // *************************************************************************************
//     // HANDLE USER ENTERS ROOM

//     socket.on('request-join-game', ({gameId, username}) => { // needs gameId from client
//         console.log(`${username} joining ${gameId}`)

//         socket.join(gameId) // add User to room (creates new room if no matching room ID)
//         // send event to all other Users in specific room
//         socket.broadcast.to(gameId).emit('add-user', { username })

//         // gather updated room data
//         const roomData = io.sockets.adapter.rooms[gameId]
//         const inRoomCount = roomData.length
//         const inRoomIds = Object.keys(roomData.sockets)

//         // send event only to User
//         socket.emit('entry-permission', { gameId, players: inRoomIds})
//         // send event to all other Users in specific room
//         socket.to(gameId).emit('new-player-joining', { username, gameId })
//         // send event to all Users in specific room
//         io.in(gameId).emit('admin-message', `${inRoomCount} players now in ${gameId}!`)
//     })

//     // *************************************************************************************
//     // HANDLE USER GAME ACTION
//     // ('answer-question', currentQuestion, success, username, current.gameId )
//     socket.on('answer-question', ({question, success, username, gameId}) => {
//         const message = `${username} answered "${question.text}" ${success ? 'correctly!' : 'incorrectly :('}`
//         console.log(message)
//         socket.broadcast.to(gameId).emit('remote-question-answered', { question, message })
//     })

//     socket.on('user-completed', ({ username, gameId, points }) => {
//         socket.broadcast.to(gameId).emit('remote-user-completed', { username, points })
//     })

//     // *************************************************************************************
//     // HANDLE USER EXITS ROOM

//     socket.on('leave-game', ({username, gameId}) => {
//         socket.leave(gameId)
//         const roomData = io.sockets.adapter.rooms[gameId]
//         const inRoomCount = roomData.length
//         io.in(gameId).emit('admin-message', `${username} has left the game! ${inRoomCount} players remain in ${gameId}...`)
//     })

//     // *************************************************************************************
//     // HANDLE USER EXITS APP / DISCONNECTS


//     socket.on("disconnect", socket => {
//         console.log("K bye then");
//     });
// });

// const port = process.env.PORT || 5001;

// server.listen(port, () => console.log(`Open for play on port ${port}!`));


// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });