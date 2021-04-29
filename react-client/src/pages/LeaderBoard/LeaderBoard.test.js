import { default as LeaderBoard } from '.';
import { render, screen } from '@testing-library/react';

describe('Welcome', () => {

    test('it renders the title', () => {
        render(<LeaderBoard />)
        const heading = screen.getByText('Leaderboard')
        expect(heading.textContent).toContain('Leaderboard');
    });

});