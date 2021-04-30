
import React from "react";

const ResultsBanner = ({text, player}) => {

    return(
        <>
            <h2>{text}</h2>
            <h2>{player}</h2>
        </>
    )
}

export default ResultsBanner;