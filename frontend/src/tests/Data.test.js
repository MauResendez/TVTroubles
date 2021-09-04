import React from 'react';
import { render, screen } from '@testing-library/react';
import Data from '../components/Data.js';

test('Renders Data Component', () => 
{
    render(<Data />);

    const video = screen.getByTestId('video');
    const title = screen.getByText('Title');
    const description = screen.getByText('Description');
    const rating = screen.getByText('Rating');

    expect(video).toBeInTheDocument;
    expect(title).toBeInTheDocument;
    expect(description).toBeInTheDocument;
    expect(rating).toBeInTheDocument;
});