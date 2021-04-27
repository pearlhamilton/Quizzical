import React, { useEffect } from "react";
import { AnswerCard, Question } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuiz } from "../../actions";
import { Redirect } from "react-router";

const Quiz = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);
 

  const endQuestion = useSelector((state)=> state.endOfQuestions)
  const currentQuestion = useSelector((state) => state.current_question);
  const result = useSelector((state) => state.results);
  let answers = result[currentQuestion].answers;
  let index = result.indexOf(result[currentQuestion])

  

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
  const shuffeledAnswers = shuffle(answers);
 
//if not at the end of the questions, keep rendering questions
  if (!endQuestion){

  return (
    <>
      <h1> I am the quiz page</h1>
      <Question />

      {shuffeledAnswers &&
        shuffeledAnswers.map((answer) => <AnswerCard answer={answer} index={index} />)} 
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
