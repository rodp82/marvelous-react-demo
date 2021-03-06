import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../CharacterCard';
import { Character } from '../../../models';

describe('CharacterCard', () => {

  it('Shows a card with the Character name and image', async () => {

    const character: Character = {
      id: 123,
      name: 'SuperMan',
      description: 'SuperMan Description'
    }
    render(<CharacterCard character={character} clickHandler={() => {}} />);
    expect(screen.getByText(character.name!)).toBeInTheDocument();
    // expect(screen.getByText(character.description!)).toBeInTheDocument();
  })
})