import React, { useEffect } from "react";
import { AnswerCard, Question } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuiz } from "../../actions";

const Quiz = () => {
 

  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  let correctAnswer = result[currentQuestion].correct_answer;
  let answers = result[currentQuestion].answers;


  
  console.log(" result");
  console.log(result[currentQuestion].question)

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  const shuffeledAnswers = shuffle(answers);
  console.log(shuffeledAnswers);

  return (
    <>
      <h1> I am the quiz page</h1>
      <p></p>
      <Question />

      {shuffeledAnswers &&
        shuffeledAnswers.map((answer) => <AnswerCard answer={answer} />)}
    </>
  );
};

export default Quiz;
