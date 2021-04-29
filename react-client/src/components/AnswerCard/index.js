import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import {useSelector} from 'react-redux'
import { endQuestions, changeQuestion} from "../../actions";
import {useHistory} from 'react-router-dom'

const AnswerCard = (props) => {

  const dispatch = useDispatch();
  const nextQuestion = (answer) => dispatch(changeQuestion(answer));
  const endQuestion =(finalAnswer) => dispatch(endQuestions(finalAnswer))
  const results = useSelector((state) => state.quizReducer.results)
  const questionArrayLength = results.length
  const history = useHistory()


 
  const handleFinalAnswer = async () => {
        endQuestion(props.answer)
        history.push('/score')
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
        <button id="answer-cards" onClick = {handleFinalAnswer}>{decodedAnswers}</button>

    )
  

  }else{
      return (
        <button id="answer-cards" onClick={() => nextQuestion(props.answer)}>{decodedAnswers}</button>
    );
  }
};

export default AnswerCard;
