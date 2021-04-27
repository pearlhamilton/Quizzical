// write redux actions here
// e.g.
// export const addUser = newUser => ({ type: 'ADD_USER', payload: newUser })

import axios from "axios";

export const fetchQuiz = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
      );

      let quizData = data.results.map((element, i) => ({
        id: i + 1,
        question: element.question,
        correct_answer: element.correct_answer,
        answers: [...element.incorrect_answers, element.correct_answer],
      }));
      // console.log(quizData[0].correct_answer);
      // console.log(quizData[1].correct_answer);
      // console.log(quizData[2].correct_answer);
      // console.log(quizData[3].correct_answer);
      // console.log(quizData[4].correct_answer);
      // console.log(quizData[5].correct_answer);
      // console.log(quizData[6].correct_answer);
      // console.log(quizData[7].correct_answer);
      // console.log(quizData[8].correct_answer);
      // console.log(quizData[9].correct_answer);

      dispatch({
        type: "LOAD_QUESTIONS",
        payload: quizData,
      });
    } catch (err) {}
  };
};

export const changeQuestion = (chosenAnswer) => ({ type: "CHANGE_QUESTION", payload:chosenAnswer });

export const endQuestions = (finalAnswer) => ({type: "END_QUESTIONS", payload:finalAnswer});