import React from "react";
//import { StartAgain } from "..";
import { useSelector } from "react-redux";
import "./style.css";

const Question = (props) => {

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
    {/* <StartAgain /> */}
    <h3 style={{color: "white"}}> {props.question} </h3>;
  </div>
  )

};

export default Question;
