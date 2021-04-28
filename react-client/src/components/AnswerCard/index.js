import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import {useSelector} from 'react-redux'
import { endQuestions, changeQuestion } from "../../actions";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AnswerCard = (props) => {

  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const username = useSelector((state) => state.user.username)
  const score = useSelector((state)=> state.quizReducer.score)
  console.log(score)

  const nextQuestion = (answer) => dispatch(changeQuestion(answer));
  const endQuestion =(finalAnswer) => dispatch(endQuestions(finalAnswer))
  const results = useSelector((state) => state.quizReducer.results)
  const questionArrayLength = results.length
  const history = useHistory()

  
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        setLoading(true)
        endQuestion(props.answer)
        await sendResults()
        history.push('/leaderboard')
    } catch (err) {
        setLoading(false)
       
    }
}

const sendResults = () => {
  return new Promise(async (resolve, reject) => {
      try {
          const options = {
              headers: { 'Content-Type': 'application/json' }
          }
          const results = {
              "player": username,
              "score": score
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

     function containsEncodedComponents(question) {
       return decodeURIComponent(question);
     }
     containsEncodedComponents(props.answer);

     let decodedAnswers = containsEncodedComponents(props.answer)
     console.log(props.index)

    // index 9 is where the code broke, so if the answer that is clicked on is at index 9 of the array, do not go to the next question, instead end the questions

  if (props.index === questionArrayLength-1){
    return(
        <button id="answer-cards" onClick = {handleSubmit}>{decodedAnswers}</button>
    )
  
  //   return(
  //     <button id="answer-cards" onClick = { () => endQuestion(props.answer)}>{props.answer}</button>
  // )

  }else{
      return (
        <button id="answer-cards" onClick={() => nextQuestion(props.answer)}>{decodedAnswers}</button>
    );
  }
};

export default AnswerCard;
