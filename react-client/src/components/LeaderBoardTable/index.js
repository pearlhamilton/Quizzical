import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from "react"
import { LeaderBoardScore } from ".."



const LeaderBoardTable = () => {

  const [scores, setScores] = useState()
  const [error, setError] = useState();


  useEffect(() => {
    async function getScores() {
      try {
        let { data } = await axios.get(
          `https://quizzicalquiz.herokuapp.com/players`
        );
        console.log(data)
        setScores(data);

      } catch (err) {
        setError(err.message);
      }
    }
    getScores();
  }, []);

  return (
    <>
      <div className="score-container">
        {scores ? scores.map(score => <LeaderBoardScore key={score.id} score={score} />) :
          <h4 id="loading">
            Loading Scores...
            </h4>
        }
      </div>
    </>
  );
};



export default LeaderBoardTable