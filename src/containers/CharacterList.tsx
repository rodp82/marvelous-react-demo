import { Container, Grid, makeStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react'
import { Character } from '../apis/marvel';
import { getCharacters } from '../apis/characters';
import CharacterCard from '../components/CharacterCard/CharacterCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const CharacterList: React.FC = () => {

  const classes = useStyles();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [open, setOpen] = React.useState(false);
  const [modalBody, setModalBody] = React.useState(<div></div>)

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

  const handleOpen = (character: Character) => {
    setModalBody(<div>
      <h2 id="simple-modal-title">{character.name}</h2>
      <p id="simple-modal-description">
        {character.description}
      </p>
    </div>)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item key={character.name} xs={12} sm={6} md={4}>
            <CharacterCard character={character} openHandler={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >{modalBody}</Modal>
    </Container>
  )
}

export default CharacterList
