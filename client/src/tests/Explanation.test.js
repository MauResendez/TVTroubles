import React from 'react';
import { render, screen } from '@testing-library/react';
import Explanation from '../components/Explanation.js';

test('Renders Explanation Component', () => 
{
    render(<Explanation />);

    const title = screen.getByText('Welcome to TV Troubles!');
    const intro = screen.getByText('We will help you solve the issue of not knowing what to watch on TV.');
    const description = screen.getByText('We will show you one show description at a time along with a preview video of the show or movie. You will then select yes or no to the show or movie.');

    expect(title).toBeInTheDocument;
    expect(intro).toBeInTheDocument;
    expect(description).toBeInTheDocument;
});