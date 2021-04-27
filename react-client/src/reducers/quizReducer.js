const init = {
  loading: false,
  results: [
      {question: "", 
      correct_answer:"",
      answers: []
      }
    ],
    current_question: 0,
    score: 0
    }



const quizReducer = (state = init, action) => {
  switch (action.type) {
    case "LOAD_QUESTIONS":
      return {
        ...state,
        results: action.payload,
      };
    case "SET ERROR":
      return { ...state, error: action.payload };

  case"CHANGE_QUESTION":
  //at this point when change question, we want to know whether the answer they clicked was correct
      const chosenAnswer = action.payload
      const questionNumber = state.current_question
      const correctAnswer = state.results[questionNumber].correct_answer
      const nextQuestion = state.current_question + 1
      const score = state.score
      // if chosenAnwer and correct answer are the same move to next question but also add one to the score
      if (chosenAnswer === correctAnswer){
          return{...state, current_question: nextQuestion, score:score+1}
        }
      else{ return{...state, current_question: nextQuestion}
      }

    default:
      return state;
  }
};
export default quizReducer;
