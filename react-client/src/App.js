import React, { useState, useEffect, Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import { Welcome, Home, LeaderBoard, Quiz, ScorePage, Lobby } from "./pages";

const App = () => {

  const [playerCount, setPlayerCount] = useState(); 

  return (
      
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/home" component={Home} />

      <Route path="/quiz" component={Quiz} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/score" component={ScorePage} />
      <Route path="/lobby" component={Lobby} />



      {/* <Route path="/" component={PageNotFound} /> */}
      {/* <Route exact path="/quizz/:id" component={quiz} /> */}
      </Switch>
  );
};


export default App;
