import React from "react";
import { useDispatch } from "react-redux";
import { changeQuestion } from "../../actions";

const AnswerCard = (props) => {
  const dispatch = useDispatch();
  const nextQuestion = (chosenAnswer) => dispatch(changeQuestion(chosenAnswer));
  console.log(props);


  
  return (
    <>
      <button onClick={() => nextQuestion(props.answer)}>{props.answer}</button>
    </>
  );
};

export default AnswerCard;
