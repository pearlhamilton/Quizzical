import React from "react";
import { StartAgain } from "..";
import { useSelector } from "react-redux";
import "./style.css";

const Question = () => {
  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  const question = result[currentQuestion].question;


// function encode(question) {
//   return encodeURIComponent(question)
//     .replace(/%40/gi, "@")
//     .replace(/%3A/gi, ":")
//     .replace(/%24/g, "$")
//     .replace(/%2C/gi, ",")
//     .replace(/%5B/gi, "[")
//     .replace(/%5D/gi, "]")
//     .replace(/&quot;/, '"')
//     .replace(/&#039;/, "'")


// }
// encode(question)
// console.log(question)
  return (
  <div>
    <StartAgain />
    <h3> {question} </h3>;
  </div>
  )

};

export default Question;
