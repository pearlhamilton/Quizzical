import { render, screen } from '@testing-library/react';
import Welcome from './index';

describe("Welcome", () => {
  beforeEach(() => {
    renderWithReduxProvider(<Welcome />);
  });
  
  test('it displays logo', () => {
    expect(screen.getByAltText('Lets Get Quizzical')).toBeInTheDocument();
  })

  test("it displays the 'New Game'button", () => {
    expect(screen.getByText('New Game')).toBeInTheDocument();
  })
})