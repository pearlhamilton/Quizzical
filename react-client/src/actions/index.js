// import qs from "qs";
import axios from "axios";


// axios({
//   method: "post",
//   url: "https://my-api.com",
//   data: qs.stringify({
//     item1: "value1",
//     item2: "value2",
//   }),
//   headers: {
//     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
//   },
// });

export const fetchQuiz = (numberOfQs, subject, difficulty) => {
  return async (dispatch) => {
    console.log(subject)
    try {
//       const { data } = await axios({
//         method: "post",
//         url: `https://opentdb.com/api.php?amount=${numberOfQs}&category=${subject}&difficulty=${difficulty}&type=multiple`,
//         // data: qs.stringify({
//         //   item1: "value1",
//         //   item2: "value2",
//         // }),
//         headers: {
//           "content-type":
//             "application/x-www-form-urlencoded; charset=iso-8859-1",
//         },
//       });
// console.log('request made')
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${numberOfQs}&category=${subject}&difficulty=${difficulty}&type=multiple`,
        {
          paramsSerializer: function (params) {
            var result = "";
            // Build the query string
            return result;
          },
        }
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