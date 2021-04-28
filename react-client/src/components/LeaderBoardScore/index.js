import React from 'react'; 

const LeaderBoardScore = (props) => {

    return(
    
        <h3>{props.score.player} : {props.score.score}</h3>
        
    )
}


export default LeaderBoardScore;