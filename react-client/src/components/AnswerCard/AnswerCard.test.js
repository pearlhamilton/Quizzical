// import AnswerCard from ".";
// import { screen } from "@testing-library/react";

  

    // test("it renders a button", () => {
    //     const fakeprops= {index:0}
    //     renderWithReduxProvider(<AnswerCard props={fakeprops}/>);
    //     let btn = screen.getByRole('button', { name: 'answer' })
    //     expect(btn).toBeInTheDocument();
    //   });
    


    //   test("it renders a a final answer button", () => {
    //     const fakeprops= {index:5}
    //     renderWithReduxProvider(<AnswerCard props={fakeprops}/>);
    //     let btn = screen.getByRole('button', { name: 'finalAnswer' })
    //     expect(btn).toBeInTheDocument();
    //   });
    

    import { default as AnswerCard } from ".";
    import { screen, render } from "@testing-library/react";
    // import userEvent from "@testing-library/user-event";
    // import { MemoryRouter } from "react-router-dom";
    describe("AnswerCard", () => {
      beforeEach(() => {
        renderWithReduxProvider(<AnswerCard result={resultStub} />);
        const resultStub =  ["Paris", "Madrid", "London", "New York"];
      });
      test("it renders a button for the answer cards", () => {
        let button = screen.getByRole("button", { name: /'next-button'/i });
        expect(button).toBeInTheDocument();
      });
      test("it shows the incorrect answer in the results", async () => {
        const incorrectAnswer = await screen.findByText("London");
        expect(incorrectAnswer).toBeInTheDocument();
      });
      test("it shows the correct answer in the results", async () => {
        const correct = await screen.findByText("Paris");
        expect(correct).toBeInTheDocument();
      });
      // test("it renders answer cards", () => {
      //   let answerCard = screen.getByTestId("answer-cards");
      //   expect(answerCard).toBeInTheDocument();
      // });
    });

