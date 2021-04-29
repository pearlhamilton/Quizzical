import { screen } from '@testing-library/react';

import Home from "."

describe('Home', () => {
    test('it renders a div', () => {
        renderWithReduxProvider(<Home />)
        const div = screen.getByRole('homepageContainer')
        expect(div).toBeInTheDocument();
        
    })

})