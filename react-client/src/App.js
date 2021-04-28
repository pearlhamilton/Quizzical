import React, { useState, useEffect, Component} from 'react'
import io from "socket.io-client";
import { Switch, Route } from 'react-router-dom';
import { Welcome, Home, LeaderBoard, Quiz, ScorePage } from "./pages";

const serverEndpoint = "http://localhost:5001";
// const serverEndpoint = "https://quizzicalquiz.herokuapp.com"

const App = () => {

    const [socket, setSocket] = useState(null);
    // const [message, setMessage] = useState();
    const [playerCount, setPlayerCount] = useState(); 

    useEffect(() => {
        const socket = io(serverEndpoint);
        setSocket( socket );
        
        socket.on("connect", () => {
          console.log(`user connected to the socket id ${socket.id}`);
        });
       
        socket.on('admin-message', msg => console.log(msg));
        
        // socket.on('admin-message', msg => setMessage(msg));
        socket.on('player-count', count => setPlayerCount(count.players_count));

        
        // console.log(socket)

        // const joinGame = e => {
        //     e.preventDefault();
        //     const { username, gameId } = e.target;
        //     const data = { username: username.value, gameId: gameId.value };
        //     this.state.socket.emit('request-join-game', data);
        //     this.setState({ username: username.value, current: { gameId: gameId.value } });
        // }


        // socket.on("users", (users) => {
        //   users.forEach((user) => {
        //     // user.self = user.userID === socket.id;
        //     // initReactiveProperties(user);
        //     console.log(user)
        //   });
        // });

        return() => {
          
          socket.disconnect();
          socket.on('user-left', msg => console.log(msg));
        }
      }, []); 
      
     



  return (
      
      <Switch>
        <Route exact path="/"  render={() => (<Welcome playerCount={ playerCount } socket={ socket }/>)}/>
        <Route path="/home" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/score" component={ScorePage} />

      {/* <Route path="/" component={PageNotFound} /> */}
        {/* <Route exact path="/quizz/:id" component={quiz} /> */}
      </Switch>
  );
};


export default App;
