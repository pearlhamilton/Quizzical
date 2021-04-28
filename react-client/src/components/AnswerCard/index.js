import React from "react";
import { useDispatch } from "react-redux";
import { endQuestions, changeQuestion } from "../../actions";
import { useSelector } from "react-redux";
import "./style.css";

const AnswerCard = (props) => {

  const dispatch = useDispatch();

  const nextQuestion = (answer) => dispatch(changeQuestion(answer));
  const endQuestion = (finalAnswer) => dispatch(endQuestions(finalAnswer))
  const results = useSelector((state) => state.quizReducer.results)
  const questionArrayLength = results.length

  //console.log(results)
  //console.log(questionArrayLength);
    // index 9 is where the code broke, so if the answer that is clicked on is at index 9 of the array, do not go to the next question, instead end the questions

     function containsEncodedComponents(question) {
       return decodeURIComponent(question);
     }
     containsEncodedComponents(props.answer);

     let decodedAnswers = containsEncodedComponents(props.answer)
     console.log(props.index)

  if (props.index === questionArrayLength-1){
    return(
        <button id="answer-cards" onClick = { () => endQuestion(decodedAnswers)}>{decodedAnswers}</button>
    )
  
  }else{
      return (
        <button id="answer-cards" onClick={() => nextQuestion(decodedAnswers)}>{decodedAnswers}</button>
    );
  }
};

export default AnswerCard;
