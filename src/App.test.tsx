import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

fdescribe('App', () => {
  fit('renders App component', () => {
    render(<App />);
    // screen.debug();
  });
});

// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   expect(true).toBe(true);
// });
