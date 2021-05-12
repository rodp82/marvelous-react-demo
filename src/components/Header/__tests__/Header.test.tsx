import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {

  it('displays the header', async () => {
    render(<Header />);
    const element = screen.getByTestId('headerTitle');
    expect(element).toHaveTextContent("MARVELous React");
  })
})