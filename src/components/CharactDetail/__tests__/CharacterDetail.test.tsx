import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from '../CharacterDetail';
import { Character } from '../../../models';

describe('CharacterDetail', () => {

  it('CharacterDetail shows correct information', async () => {

    const character: Character = {
      id: 123,
      name: 'SuperMan',
      description: 'SuperMan Description'
    }
    render(<CharacterDetail character={character} closeHandler={() => {}} open={true} />);
    expect(screen.getByText(character.name!)).toBeInTheDocument();
    // expect(screen.getByText(character.description!)).toBeInTheDocument();
  })
})