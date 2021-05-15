import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../CharacterList';
import { Character } from '../../../models';

describe('CharacterList', () => {

  it('displays the list of characters', async () => {

    const characters: Character[] = [
      { id: 123, name: 'Hero1', description: 'Description' },
      { id: 123, name: 'Hero2', description: 'Description' },
      { id: 123, name: 'Hero3', description: 'Description' },
      { id: 123, name: 'Hero4', description: 'Description' }
    ];
    
    render(<CharacterList characters={characters} />);
    const cards = await screen.findAllByText(/Hero\d/);
    expect(cards).toHaveLength(characters.length);
  })
})