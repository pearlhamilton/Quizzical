import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LeaderBoardTable } from "../../components";

function leaderBoard() {
  const score = useSelector((state) => state.quizReducer.score); //get score from state

  return (
    <>
      <div id="playerscore">
        <h1>You scored: {score}</h1>
      </div>
      <div id="leaderboard">
        <h2>leaderboard </h2>
        <LeaderBoardTable />
      </div>
    </>
  );
}
export default leaderBoard;
