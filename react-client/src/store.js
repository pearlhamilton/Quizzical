import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userReducer, quizReducer, configReducer } from './reducers'


const rootReducer = combineReducers({
    quizReducer, // key name same as the carefully renamed default export
    user: userReducer, // specific key name instead of the variable name
    config: configReducer
  })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;