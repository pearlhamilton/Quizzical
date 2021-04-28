import React from "react";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import quizReducer from "../reducers/quizReducer";

const TestProviders = ({ initState }) => {
  initState ||= {
    location: "",
    result: [{ question: "", correct_answer: "", answers: [] }],
    current_question_index: 0,
    score: 0,
    endOfQuestions: false,
    loading: false,
  };
  let testReducer = () => quizReducer(initState, { type: "@@INIT" });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({
  data: [
    {
      question: "What is the capital city of France?",
      correct_answer: "Paris",
    },
  ],
});

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
