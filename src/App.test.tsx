import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    // screen.debug();
    expect(screen.getByText('Select a hero to learn more')).toBeInTheDocument();
  });
});
