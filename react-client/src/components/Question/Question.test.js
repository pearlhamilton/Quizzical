import { default as Question} from ".";
import { screen } from "@testing-library/react";


describe("Question", () => {
  
    test("it renders a question header", () => {
        renderWithReduxProvider(<Question />);
        let heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
      });

      test('it renders a div', () => {
        renderWithReduxProvider(<Question />)
        const div = screen.getByRole('question-container')
        expect(div).toBeInTheDocument();
        
    })

    

    })