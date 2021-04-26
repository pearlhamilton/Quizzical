import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, LeaderBoard, Quiz } from "./pages";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/leaderboard" component={LeaderBoard} />
      {/* <Route path="/" component={PageNotFound} /> */}
    </Switch>
  </div>
);

export default App;
