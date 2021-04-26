import React from "react";
import { useSelector } from "react-redux";


const Question = () => {

  const currentQuestion = useSelector((state) => state.current_question)




  const result = useSelector((state) => state.results);
  const question = result[currentQuestion].question;

  return <p> {question} </p>;
};

export default Question;
