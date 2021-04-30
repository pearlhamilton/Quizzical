
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
            {winner ?  <h4>{player} {winner}</h4> : <h4>{player}</h4> }
            <h4>{percentage}%</h4>
        </div>
        </>
    )
}

export default ResultsBanner;