import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from '../components/Team.js';

test('Renders Team Component', () => 
{
    render(<Team />);

    const title = screen.getByText('Team');

    expect(title).toBeInTheDocument;
});