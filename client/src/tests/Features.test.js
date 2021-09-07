import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from '../components/Features.js';

test('Renders Features Component', () => 
{
    render(<Features />);

    const title = screen.getByText('Features');

    expect(title).toBeInTheDocument;
});