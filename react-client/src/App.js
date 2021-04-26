import React, { useState, useEffect, Component} from 'react'
import io from "socket.io-client";
import { Switch, Route } from 'react-router-dom';
import { Welcome } from './pages';
const serverEndpoint = "http://localhost:3000";

const App = () => {

    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState();
    useEffect(() => {
        const socket = io(serverEndpoint);
        setSocket({ socket });
        // socket.on("connect", (str) => {
        //     setMessage(str)
        //   })
        socket.on('admin-message', msg => console.log(msg));
        socket.on('admin-message', msg => setMessage(msg));
        //closes the connection
        return() => {
            socket.disconnect();
        }
      }, []);

     

  return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        {/* <Route exact path="/quizz/:id" component={quiz} /> */}
      </Switch>
  );
};

export default App