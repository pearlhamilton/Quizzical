import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import quizReducer from './reducers/quizReducer'
const store = createStore(quizReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;