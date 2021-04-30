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
      console.log(scoresArr);
      const userArr = res.scores.map(el => el.username);
      console.log(userArr);
      setAllScores(scoresArr);
      setPlayers(userArr);
  });

  // socket.on('score', config, val => console.log(val))
  
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
        console.log("\n\n\n\nRESULTS BEING SEND\n\n\n\n")
  }, [score])

  return (
    <div id="score-page">
    <div id="playerscore">
      <h1>You scored: {percentage}% </h1>

      <div className="score-banner">

      <div className="wrapper"> 
        <h2>player</h2>
        <h2>score</h2>
      </div>
{/* 
      <div className="wrapper">
            <h2 >smkt</h2>
            <h2 >0</h2>
      </div>  
      <div className="wrapper">
            <h2 >tree</h2>
            <h2 >5</h2>
      </div>  */}
   
{  players && players.map((player, i) =>  
          < ResultsBanner className="right" player={player} text={allScores[i]}/>)}

{/* {  players && players.map((player) =>  
          < ResultsBanner className="right" player={player}/>)}

      { allScores && allScores.map(score =>  
          < ResultsBanner className="left" text={score}/>)} */}


                      
          {/* <h2 style={ {writingMode: "vertical-rl", textOrientation: "upright"}}>{players}</h2> */}
      </div>
      <Link to="/leaderboard"><button>Go to Leaderboard</button></Link>
    </div>
    </div>
  );
}
export default ScorePage;