import React from "react";
import "./style.css";
import { AnswerCard, Question } from "../../components";
import { useSelector} from "react-redux";

const Quiz = () => {
  
  
  const currentQuestion = useSelector((state) => state.quizReducer.current_question_index);
  const result = useSelector((state) => state.quizReducer.results);
  const answers = result[currentQuestion].answers;
  const index = result.indexOf(result[currentQuestion])
  const question = result[currentQuestion].question;



// SHUFFLE ARRAY, so answers are not in the same order each time
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

//Use the shuffled array and for each answer in the array map over it 
  const shuffledAnswers = shuffle(answers);
 
  return (
    <div role="quiz-container" id="quiz-page">
      <Question question={question} index={index} />

      {shuffledAnswers &&
        shuffledAnswers.map((answer) => <AnswerCard answer={answer} index={index} />)} 
    </div>
  );
  
};

export default Quiz;
