
import React from "react";
import {useSelector} from "react-redux";

const ResultsBanner = ({text, player}) => {

    const results = useSelector((state) => state.quizReducer.results);

    const percentage = Math.round(text / results.length * 100)

    console.log({text})
    return(
        <>
        <div className="wrapper">
            <h2>{player}</h2>
            <h2>{percentage}%</h2>
        </div>
        </>
    )
}

export default ResultsBanner;