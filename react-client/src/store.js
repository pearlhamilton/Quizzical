import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer, quizReducer } from './reducers'

const store = createStore(combineReducers({quizReducer, userReducer}), composeWithDevTools(applyMiddleware(thunk)))

export default store;