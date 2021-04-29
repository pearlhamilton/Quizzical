import { default as ScorePage } from './index';
import { render, screen } from '@testing-library/react';
describe('ScorePage', () => {

  beforeEach(() => {
    renderWithReduxProvider(<ScorePage />);
  });
    test('it renders the title', () => {
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    });
});