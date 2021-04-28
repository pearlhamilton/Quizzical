import React from "react";
import { AnswerCard, Question } from "../../components";
import { useSelector} from "react-redux";
import { Redirect } from "react-router";

const Quiz = () => {
  

  const endQuestion = useSelector((state)=> state.endOfQuestions)
  const currentQuestion = useSelector((state) => state.current_question_index);
  const result = useSelector((state) => state.results);
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
 
//if not at the end of the questions, keep rendering questions
  if (!endQuestion){

  return (
    <>
      <Question question={question} />

      {shuffledAnswers &&
        shuffledAnswers.map((answer) => <AnswerCard answer={answer} index={index} />)} 
    </>
  );
      } 
    //else go to the leader board 
    else{ 
      return(
        <Redirect to="/leaderboard"/>
   
    )
    }
};

export default Quiz;
