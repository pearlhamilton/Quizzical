import { default as LeaderBoardScore } from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


// failing
describe("p", () => {
  test("it renders a p", () => {
    render(<LeaderBoardScore />);
    let p = screen.getByText("");
    expect(p).toBeInTheDocument();
  });
})