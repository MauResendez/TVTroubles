import React from 'react';
import { render, screen } from '@testing-library/react';
import Tools from '../components/Tools.js';

test('Renders Tools Component', () => 
{
    render(<Tools />);

    const title = screen.getByText('Tools');

    expect(title).toBeInTheDocument;
});