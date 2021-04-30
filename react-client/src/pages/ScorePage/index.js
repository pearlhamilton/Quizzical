import React, {useEffect, userState, useState} from "react";
import "./style.css";
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import axios from 'axios'
import {socket} from '../../socket/index.js';
import {ResultsBanner} from '../../components'

const ScorePage =() => {
const username = useSelector((state) => state.user.user.username)
const score = useSelector((state)=> state.quizReducer.score) //get score from state
const results = useSelector((state) => state.quizReducer.results);
const percentage = Math.round(score / results.length * 100)
// console.log(percentage)
const [allScores, setAllScores] = useState("")
const [players, setPlayers] = useState("")
const room = useSelector((state) => state.user.room)


useEffect(() => {

  let config =  {
    score: score,
    room: room,
    username: username
  }

  socket.emit('score', config, (res) => {
      const scoresArr = res.scores.map(el => el.score);
      // console.log(scoresArr);
      const userArr = res.scores.map(el => el.username);
      // console.log(userArr);
      setAllScores(scoresArr);
      setPlayers(userArr);

  });
}, [allScores])

console.log(allScores)
  
const getPlayers = () => {
    //TODO: extract from redux room name and store to roomName
    socket.on('get-player-data', roomName, (res) => {
      console.log(res)
    }); 
  }

  const sendResults = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const options = {
                headers: { 'Content-Type': 'application/json' }
            }
            const results = {
                "player": username,
                "score": percentage
              }
            console.log(results);
            const { data } = await axios.post(`https://quizzicalquiz.herokuapp.com/players`, results, options)
           
            if (data.err){
                throw Error(data.err)
            }
            resolve('Scores sent to leaderboard!')
        } catch (err) {
            reject(`Can't send results: ${err}`);
        }
    })
  }


  useEffect(() => {
        sendResults()
  }, [score])

  let highest = 0;
  const winnerIs = (player, score) => {

  let str; 

  if(players.length <= 1){
    str = "👑";
  } else if (player.length > 1){

    //multiplayer
    if(highest <= score){
      highest = score; 
      str = "👑";
    }
  }
  return str; 
}


  return (
    <div id="score-page">
    <div id="playerscore">
      <h2>You scored: {percentage}% </h2>

      <div className="score-banner">

      <div className="wrapper"> 
        <h3>player</h3>
        <h3>score</h3>
      </div>

        {  players && players.map((player, i) =>       
          < ResultsBanner className="right" player={player} text={allScores[i]} winner={winnerIs(player, allScores[i])}/>)
        }
      </div>
      <Link to="/leaderboard"><button>Go to Leaderboard</button></Link>
    </div>
    </div>
  );
}
export default ScorePage;