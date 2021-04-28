import React, {useState} from 'react';
import axios from "axios"
import {useEffect} from "react"



const LeaderBoardTable = () => {

    const [scores, setScores] = useState()
    const [error, setError] = useState();

  
    useEffect(() => {
      async function getScores() {
        try {
          let { data } = await axios.get(
            `https://quizzicalquiz.herokuapp.com/players`
          );
          console.log(data)
          setScores(data);
        //   console.log(scores[0].id)
        //   console.log(setScores)

        } catch (err) {
          setError(err.message);
        }
      }
      getScores();
    }, []);

    console.log(scores)
    if (scores){
    scores.map(score => console.log(score))}
    
    else{
        console.log('no scores')
    }

    // const renderScores = () => {
    //     return scores.map(score => <div>{score.player}{score.score}</div>)
    //   }

    // console.log(renderScores())

    return (
        <>
    hello 
        {/* {renderScores()} */}
          {/* {scores ? (
            <>
              <p>{scores}</p>
            </>
          ) : (
            <h4 id="loading">
              Loading...{" "}
            </h4>
          )} */}
        </>
      );
    };



export default LeaderBoardTable