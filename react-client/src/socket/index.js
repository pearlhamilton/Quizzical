// import React, { useEffect, useState } from "react";
import io from "socket.io-client";
// import {setID} from '../actions/userType';
// import {useDispatch} from 'react-redux';
const serverEndpoint = "http://localhost:5001";
// const serverEndpoint = "https://quizzicalquiz.herokuapp.com"

// const [socket, setSocket] = useState(null);
const socket = io(serverEndpoint);


// const getTimer = (cb) => {
//     socket.on('timer', timestamp => cb(timestamp));
//     socket.emit('getTimer', 1000)
// }

socket.on("connect", () => {
    // const dispatch = useDispatch()
    console.log(`user connected to the socket id ${socket.id}`);
    const socketId = socket.id; 
    // dispatch(setID(socketId));
});

// const getPlayerCount = () => {
//     let count = socket.on('users', count => count)
//     console.log(count)
//     return count
    
    // console.log(usr)
    // let playerCount = socket.on('player-count', count => count.players_count);
    // console.log(playerCount)
    // return playerCount;
// }
// useEffect(() => {
    
//     const socket = io(serverEndpoint);
//     setSocket( socket );
    
//     socket.on("connect", () => {
//       console.log(`user connected to the socket id ${socket.id}`);
//     });
   
//     socket.on('admin-message', msg => console.log(msg));
    
//     // socket.on('admin-message', msg => setMessage(msg));
//     // socket.on('player-count', count => setPlayerCount(count.players_count));

    
//     // console.log(socket)

//     // const joinGame = e => {
//     //     e.preventDefault();
//     //     const { username, gameId } = e.target;
//     //     const data = { username: username.value, gameId: gameId.value };
//     //     this.state.socket.emit('request-join-game', data);
//     //     this.setState({ username: username.value, current: { gameId: gameId.value } });
//     // }


//     // socket.on("users", (users) => {
//     //   users.forEach((user) => {
//     //     // user.self = user.userID === socket.id;
//     //     // initReactiveProperties(user);
//     //     console.log(user)
//     //   });
//     // });

//     return() => {
      
//       socket.disconnect();
//       socket.on('user-left', msg => console.log(msg));
//     }
//   }, []); 
  

//   playerCount={ playerCount } socket={ socket }/>)}

export { socket};