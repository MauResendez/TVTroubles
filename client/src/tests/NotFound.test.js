import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../views/NotFound.js';

test('Renders Not Found Component', () => 
{
    render(<NotFound />);

    const title = screen.getByText('404 - Not Found!');

    expect(title).toBeInTheDocument;
});