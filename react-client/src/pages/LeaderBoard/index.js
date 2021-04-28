import React from "react";

import {useSelector} from "react-redux"
import {LeaderBoardTable} from "../../components"

function leaderBoard() {

  const score = useSelector((state)=> state.score) //get score from state


  return (
    <>
    {/* <div style={{color: "lightblue"}}>
      <h1>⭐️You scored 97%⭐️</h1>
      <h2>LEADERBOARD</h2>
      <p>Wonder Woman: 92%</p>
      <p>Joe Bloggs: 78%</p>
      <p>Barack Obama: 51%</p>
      <p>Will Smith: 30%</p>
      <h1>You scored: {score}</h1>
    </div> */}

    <LeaderBoardTable/>

<h1>You scored: {score}</h1>
</>
  );
}
export default leaderBoard;
