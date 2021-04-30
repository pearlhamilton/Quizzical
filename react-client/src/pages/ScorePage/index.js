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


// oponentScore
  

///useEffect
//socket event with score 
//socket broadcast
//

useEffect(() => {

  let config =  {
    score: score,
    room: room,
    username: username
  }

  socket.emit('score', config, (res) => {
      console.log(res.scores[0])
      

      const scoresArr = res.scores.map(el => el.score)
      console.log(scoresArr)
      const userArr = res.scores.map(el => el.username)
      console.log(userArr)
            // console.log(usernames)
      setAllScores(scoresArr);
      setPlayers(userArr)
     
  })

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
            console.log(results)
            const { data } = await axios.post(`https://quizzicalquiz.herokuapp.com/players`, results, options)
            console.log(data)
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
    })

    // const renderScores = () => {
    //   let components = []; 

    //   for (let i = 0; i < allScores.length; i++){
    //     components[i].push(<h2>{allScores[i]} : {players[i]}</h2>)
    //   }

    //   return(
    //     { allScores.map( el  => <h2>el</h2>) }
    //   )
    // }

  // const mapIt = ( )= 

  return (
    <div id="score-page">
    <div id="playerscore">
      <h1>You scored: {percentage}% </h1>

            {/* <h2>{allScores}:{players}</h2>  */}
      {/* {renderScores} */}
     
      {/* <h2 style={ {writingMode: "vertical-rl", textOrientation: "upright"} }>{allScores}</h2> */}
      {/* { allScores} */}
      <div className="score-banner">
     
          
      <h2 className="left">player</h2>
      <h2 className="right">score</h2>
    
      {  players && players.map((player) =>  
          < ResultsBanner className="right" player={player}/>)}
      { allScores && allScores.map(score =>  
          < ResultsBanner className="left" text={score}/>)}


                      
          {/* <h2 style={ {writingMode: "vertical-rl", textOrientation: "upright"}}>{players}</h2> */}
      </div>
      <Link to="/leaderboard"><button>Go to Leaderboard</button></Link>
    </div>
    </div>
  );
}
export default ScorePage;