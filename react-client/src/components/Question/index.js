import React from "react";
import { StartAgain } from "..";
import { useSelector } from "react-redux";
import "./style.css";

const Question = () => {
  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  const question = result[currentQuestion].question;

  return (
  <div>
    <StartAgain />
    <h3> {question} </h3>;
  </div>
  )

};

export default Question;
