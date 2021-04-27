import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
const Question = () => {
  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  const question = result[currentQuestion].question;

  return <h3> {question} </h3>;
};

export default Question;
