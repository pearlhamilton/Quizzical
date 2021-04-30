
import React from "react";
import {useSelector} from "react-redux";

const ResultsBanner = ({text, player, winner}) => {

    const results = useSelector((state) => state.quizReducer.results);

    const percentage = Math.round(text / results.length * 100)

    console.log({text})

    let srt; 

    return(
        <>
        <div className="wrapper">
            {winner ?  <h2>{player} {winner}</h2> : <h2>{player}</h2> }
            <h2>{percentage}%</h2>
        </div>
        </>
    )
}

export default ResultsBanner;