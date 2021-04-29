import { default as Form } from ".";
import { screen, render  } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { MemoryRouter } from "react-router-dom";
describe("Form", () => {
  beforeEach(() => {
    renderWithReduxProvider(<Form />);
    //render(<Form />);
  });
  test("it renders a form", () => {
    let form = screen.getByLabelText("game-selection");
    //const correctAnswer = state.results[0].correct_answer;
    expect(form).toBeInTheDocument();
  });
  test("it renders a category dropdown menu", () => {
    let categoryInput = screen.getByLabelText("category");
    expect(categoryInput).toBeInTheDocument();
  });
  // test("it calls category choice on form submission", () => {
  //   let categoryInput = screen.getByRole("category", {
  //     name: /Pick a category/i
  //   });
  //   //userEvent.type(categoryInput, "Music{enter}");
  //   expect(categoryInput).toBeInTheDocument();
  //   //expect(getResultMock).toHaveBeenNthCalledWith(1, "Music");
  // });

  test("it renders a number of questions option", () => {
    let numberOfQuestionsInput = screen.getByAltText("number of questions");
    expect(numberOfQuestionsInput).toBeInTheDocument();
  });
  //   test("it calls number of questions chosen on form submission", () => {
  //     let numberOfQuestionsInput = screen.getByLabelText("number of questions");
  //     userEvent.type(numberOfQuestionsInput, "5{enter}");
  //     expect(getResultMock).toHaveBeenNthCalledWith(1, "5");
  //   });
});