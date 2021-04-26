import React, { useState, useEffect, Component} from 'react'
import io from "socket.io-client";
import { Switch, Route } from 'react-router-dom';
import { Welcome } from './pages';
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

        return() => {
            socket.disconnect();
        }
      }, []); 
      
      console.log(playerCount) 

  return (
      
      <Switch>
        <Route exact path="/"  render={() => (<Welcome playerCount={playerCount} />)}/>
     
        {/* <Route exact path="/quizz/:id" component={quiz} /> */}
      </Switch>
  );
};

export default App