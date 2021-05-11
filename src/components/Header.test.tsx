import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { unmountComponentAtNode } from 'react-dom';

let container: HTMLDivElement | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container!);
  container?.remove();
  container = null;
});

it('displays the header', async () => {
  render(<Header />);
  const linkElement = screen.getByText(/MARVELous React/i);
  expect(linkElement).toBeInTheDocument();
})
// test('renders learn react link', () => {
  
// });