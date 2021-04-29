import React from 'react'; 


const LeaderBoardScore = (props) => {

    return(
    <p role="leaderboardScore" className="leaderboard-score">
        <span>{props.score.player}</span>
        {/* <span> : </span>  */}
        <span>{props.score.score}%</span>
        
        </p>
    )
}


export default LeaderBoardScore;