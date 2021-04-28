const init = {
    loading: false,
    results: [
              {question: "", 
              correct_answer:"",
              answers: []
              }
            ],
    current_question_index: 0,
    score: 0,
    endOfQuestions:false
}


const quizReducer = (state = init, action) => {
//when refering to index, I mean index of the question in the array
  const chosenAnswer = action.payload
  const currentQuestionIndex = state.current_question_index
  const correctAnswer = state.results[currentQuestionIndex].correct_answer
  const nextQuestionIndex = state.current_question_index + 1
  const score = state.score


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
      // if chosenAnswer and correct answer are the same move to next question but also add one to the score
      if (chosenAnswer === correctAnswer){
          return{...state, current_question_index: nextQuestionIndex, score:score+1}
      } else{ 
          return{...state, current_question_index: nextQuestionIndex}
      };

    case "END_QUESTIONS":
      if (chosenAnswer === correctAnswer){
        return{...state, score:score+1, endOfQuestions:true}

      } else{
          return{...state, endOfQuestions: true}
      }
      
    default:
      return state;
  }
};
export default quizReducer;
