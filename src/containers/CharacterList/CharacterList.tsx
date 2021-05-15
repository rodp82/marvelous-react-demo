import React, { useState } from 'react'
import { Grid} from '@material-ui/core';
import { Character } from '../../models';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterDetail from '../../components/CharactDetail/CharacterDetail';


const CharacterList: React.FC<{ characters: Character[] }> = ({ characters }) => {

  const [selected, setSelected] = useState<Character | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (character: Character) => {
    setSelected(character);
    setOpen(true);
  };

  const handleClose = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item key={character.name} xs={12} sm={6} md={4}>
            <CharacterCard character={character} clickHandler={handleClick} />
          </Grid>
        ))}
      </Grid>
      
      {selected &&
        <CharacterDetail character={selected} closeHandler={handleClose} open={open}></CharacterDetail>
      }
    </React.Fragment>
  )
}

export default CharacterList
