import React from "react";

import { useSelector } from "react-redux";
import "./style.css";

const Question = () => {
  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  const question = result[currentQuestion].question;

  return (
  <div>
   
    <h3> {question} </h3>;
  </div>
  )

};

export default Question;
