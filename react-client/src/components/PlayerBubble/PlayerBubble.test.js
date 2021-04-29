import { default as PlayerBubble } from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


// failing
describe("player bubble", () => {
  test("it renders a paragraph", () => {
    renderWithReduxProvider(<PlayerBubble />);
    let p = screen.getByRole("playerbubble");
    expect(p).toBeInTheDocument();
  });
})