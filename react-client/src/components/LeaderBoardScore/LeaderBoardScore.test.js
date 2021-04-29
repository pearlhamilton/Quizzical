import { default as LeaderBoardScore } from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


// failing
describe("p", () => {
  test("it renders a p", () => {
    const fakeprop ="hello"
    render(<LeaderBoardScore props={fakeprop} />);
    let p = screen.getByRole("leaderboardScore");
    expect(p).toBeInTheDocument();
  });
})