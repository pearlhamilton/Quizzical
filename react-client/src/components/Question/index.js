import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../../actions";

const Question = () => {
  //   const dispatch = useDispatch();

  const result = useSelector((state) => state.results);
  console.log(result[0].question);
  const question = result[0].question;
  
  //   if (result) {
  //     console.log(result[0].question);
  //   } else {
  //     console.log("nothing");
  //   }

  // console.log(data.results[0].question);

  // console.log(data.results[0].correct_answer);
  //   const loading = useSelector((state) => state.loading);

  //   const query = (username) => dispatch(fetchRepos(username));
  return <p> {question} </p>;
};

export default Question;
