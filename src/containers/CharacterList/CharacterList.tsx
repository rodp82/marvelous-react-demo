import { Backdrop, Container, Fade, Grid, makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Modal from '@material-ui/core/Modal';
import React, { useEffect, useState } from 'react'
import { Character } from '../../apis/marvel';
import { getCharacters } from '../../apis/characters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  pagination: {
    marginTop: '1em'
  }
}));


const CharacterList: React.FC = () => {

  const classes = useStyles();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [selected, setSelected] = useState<Character | null>(null);
  const [open, setOpen] = React.useState(false);
  // const [modalBody, setModalBody] = React.useState(<div></div>);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const limit = 6;

  const handleClick = (character: Character) => {
    setSelected(character);
    setOpen(true);
  };

  const handlePagination = (event: object, newPage: number) => {
    console.log('event', event)
    console.log('page', newPage)
    if (page !== newPage) {
      setCharacters([]);
      setPage(newPage);
    }
  }

  const handleClose = () => {
    setSelected(null);
    setOpen(false);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters(page, limit);
        if (response.data.data?.results?.length) {
          setCharacters(response.data.data.results);
          setTotalPages(Math.ceil(response.data.data?.total! / limit));
        }
      } catch (error) {
        console.error(error);
      }
    }


    fetchCharacters();
  }, [page]);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item key={character.name} xs={12} sm={6} md={4}>
            <CharacterCard character={character} clickHandler={handleClick} />
          </Grid>
        ))}
      </Grid>
      {characters.length > 0 &&
        <Pagination className={classes.pagination}
          page={page}
          count={totalPages}
          boundaryCount={3}
          size="large"
          color="primary"
          onChange={handlePagination} />
      }
      {selected &&
        <Modal className={classes.modal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="modal-title">{selected.name}</h2>
              <p id="modal-description">{selected.description}</p>
            </div>
          </Fade>
        </Modal>
      }
    </Container>
  )
}

export default CharacterList
