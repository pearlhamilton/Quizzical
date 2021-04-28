import axios from "axios";




export const fetchQuiz = (numberOfQs, subject, difficulty) => {
  return async (dispatch) => {
    try {

      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${numberOfQs}&category=${subject}&difficulty=${difficulty}&type=multiple&encode=url3986`

      );

      let quizData = data.results.map((element, i) => ({
        id: i + 1,
        question: element.question,
        correct_answer: element.correct_answer,
        answers: [...element.incorrect_answers, element.correct_answer],
      }));
      
      dispatch({
        type: "LOAD_QUESTIONS",
        payload: quizData,
      });
    } catch (err) {
      console.warn(err.message)
      dispatch({
        type: "SET_ERROR",
        payload: err.message
      })
    }
  };
};

export const changeQuestion = (answer) => ({ type: "CHANGE_QUESTION", payload:answer });

export const endQuestions = (finalAnswer) => ({type: "END_QUESTIONS", payload:finalAnswer});

export const getScore = () => ({type: "GET_SCORE"});