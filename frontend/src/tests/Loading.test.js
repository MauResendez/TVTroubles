import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading.js';

test('Renders Loading Component', () => 
{
    render(<Loading />);

    const loading = screen.getByRole('img');
    expect(loading).toHaveAttribute('src', 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg');
    expect(loading).toHaveAttribute('alt', 'Loading...');

    expect(loading).toBeInTheDocument;
});