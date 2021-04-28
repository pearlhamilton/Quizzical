import React from "react";
import { useDispatch } from "react-redux";
import { endQuestions, changeQuestion } from "../../actions";
import {useSelector} from "react-redux"
import "./style.css";


const AnswerCard = (props) => {

  const dispatch = useDispatch();
  
  const nextQuestion = (answer) => dispatch(changeQuestion(answer));
  const endQuestion = (finalAnswer) => dispatch(endQuestions(finalAnswer))
  const results = useSelector((state) => state.results)
  const questionArrayLength = results.length

    // index 9 is where the code broke, so if the answer that is clicked on is at index 9 of the array, do not go to the next question, instead end the questions

  if (props.index === questionArrayLength-1){
    return(
        <button style={{color: "white", backgroundColor: "pink"}} onClick = { () => endQuestion(props.answer)}>{props.answer}</button>
    )
  
  }else{
      return (
        <button style={{color: "white", backgroundColor: "pink"}} onClick={() => nextQuestion(props.answer)}>{props.answer}</button>
    );
  }
};

export default AnswerCard;
