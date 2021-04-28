import React from 'react'; 

const LeaderBoardScore = (props) => {

    return(
    
        <p>{props.score.player} : {props.score.score}</p>
        
    )
}


export default LeaderBoardScore;