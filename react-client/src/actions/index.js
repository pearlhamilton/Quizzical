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

      let quizData = data.results.map((element) => ({
        question: element.question,
        correct_answer: element.correct_answer,
        incorrect_answers: element.incorrect_answers,
      }));
      console.log(quizData);
      //   console.log(data.results[0].question);

      //   console.log(data.results[0].correct_answer);
      dispatch({
        type: "LOAD_QUESTIONS",
        payload: quizData,
      });
    } catch (err) {}
  };
};
