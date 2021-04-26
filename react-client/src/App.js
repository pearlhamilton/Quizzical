import React, { useState, useEffect, Component} from 'react'
import io from "socket.io-client";
import { Switch, Route } from 'react-router-dom';
import { Welcome, Home, LeaderBoard, Quiz } from "./pages";

const serverEndpoint = "http://localhost:3000";

const App = () => {

    const [socket, setSocket] = useState(null);
    // const [message, setMessage] = useState();
    const [playerCount, setPlayerCount] = useState(); 


    useEffect(() => {
        const socket = io(serverEndpoint);
       
        socket.on('admin-message', msg => console.log(msg));
        // socket.on('admin-message', msg => setMessage(msg));
        socket.on('player-count', count => setPlayerCount(count.players_count));
        
        setSocket({ socket });
        // console.log(socket)

        // joinGame = e => {
        //     e.preventDefault();
        //     const { username, gameId } = e.target;
        //     const data = { username: username.value, gameId: gameId.value };
        //     this.state.socket.emit('request-join-game', data);
        //     this.setState({ username: username.value, current: { gameId: gameId.value } });
        // }
    

        return() => {
            socket.disconnect();
        }
      }, []); 
      
      console.log(playerCount) 

  return (
      
      <Switch>
        <Route exact path="/"  render={() => (<Welcome playerCount={playerCount} />)}/>
        <Route path="/home" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/leaderboard" component={LeaderBoard} />
      {/* <Route path="/" component={PageNotFound} /> */}
        {/* <Route exact path="/quizz/:id" component={quiz} /> */}
      </Switch>
  );
};


export default App;
