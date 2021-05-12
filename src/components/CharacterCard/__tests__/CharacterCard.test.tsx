import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../CharacterCard';
import { Character } from '../../../apis/marvel';

describe('Header', () => {

  it('displays the header', async () => {

    const character: Character = {
      id: 123,
      name: 'SuperMan',
      description: 'SuperMan Description'
    }
    render(<CharacterCard character={character} openHandler="{() => {}}" />);
    expect(screen.getByText(character.name!)).toBeInTheDocument();
    // expect(screen.getByText(character.description!)).toBeInTheDocument();
  })
})