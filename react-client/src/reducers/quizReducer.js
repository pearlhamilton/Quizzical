const init = {
  loading: false,
  results: [
      {question: "", 
      correct_answer:"",
      answers: []
    }
  
],
current_question: 0
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
      const nextQuestion = state.current_question + 1
      return{...state, current_question: nextQuestion}


    default:
      return state;
  }
};
export default quizReducer;
