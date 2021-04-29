import { screen } from '@testing-library/react';

import Quiz from "."

describe('Quiz', () => {
    test('it renders a div', () => {
        renderWithReduxProvider(<Quiz />)
        const div = screen.getByRole('quiz-container')
        expect(div).toBeInTheDocument();
        
    })

})