const init = {
  loading: false,
  results: [
      {question: "", 
      correct_answer:"" 
    }
]
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
    default:
      return state;
  }
};
export default quizReducer;
