import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
//import { useSelector } from "react-redux";


const Question = (props) => {
  //console.log(props.id)
  const results = useSelector((state) => state.quizReducer.results);
  const questionArrayLength = results.length;

  //console.log(results)
  //console.log(questionArrayLength);
  function containsEncodedComponents(question) {
    return decodeURIComponent(question);
  }
  containsEncodedComponents(props.question);

  let questionNumber = props.index + 1
  console.log(questionNumber);

  return (
    <div>
      <h1>
        Question {questionNumber} of {questionArrayLength}
      </h1>
      <h3 style={{ color: "white" }}>
        {containsEncodedComponents(props.question)}
      </h3>
      ;
    </div>
  );
};

export default Question;
