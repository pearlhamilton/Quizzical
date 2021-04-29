import React, {useEffect} from 'react'; 


const LeaderBoardScore = (props) => {

    return(
    
        <p role="leaderboardScore">{props.score.player} : {props.score.score} %</p>
        
    )
}


export default LeaderBoardScore;