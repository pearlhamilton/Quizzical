
import React from "react";
import "./style.css";
import {LeaderBoardTable} from "../../components"
import {useHistory} from 'react-router-dom'

function leaderBoard() {
  const history = useHistory()
  const handleClick = () => {
    history.push("/")
  }

  return (
    <div id="leaderboard-page">
      <h2>Leaderboard </h2>
      <LeaderBoardTable/>
      <button id="start-again" onClick={handleClick}>Start Again</button>
</div>

  );
}
export default leaderBoard;
