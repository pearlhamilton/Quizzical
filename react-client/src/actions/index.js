import axios from "axios";

export const fetchQuiz = (numberOfQs, subject, difficulty) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${numberOfQs}&category=${subject}&difficulty=${difficulty}&type=multiple`
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
    } catch (err) {}
  };
};

export const changeQuestion = () => ({ type: "CHANGE_QUESTION" });
