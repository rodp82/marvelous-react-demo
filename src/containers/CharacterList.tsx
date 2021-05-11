import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Character, getCharacters } from '../apis/marvel';
import CharacterCard from '../components/CharacterCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


const CharacterList: React.FC = () => {

  const classes = useStyles();

  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      if (response.data.data?.results?.length) {
        setCharacters(response.data.data.results);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item key={character.name} xs={12} sm={6} md={4}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CharacterList
