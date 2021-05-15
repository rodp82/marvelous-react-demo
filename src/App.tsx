import React, { useEffect, useState } from 'react';
import { Container, createMuiTheme, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import Header from './components/Header/Header';
import CharacterList from './containers/CharacterList/CharacterList';
import { Character } from './models';
import { getCharacters } from './apis/marvel';
import { RingLoader } from 'react-spinners';
import { Pagination } from '@material-ui/lab';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EC1D24'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  pagination: {
    marginTop: '1em'
  }
}));

export default function App() {

  const classes = useStyles();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [loading, setLoading] = useState(true);

  const limit = 6;


  const handlePagination = (event: object, newPage: number) => {
    if (page !== newPage) {
      setCharacters([]);
      setPage(newPage);
    }
  }

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
      setLoading(false);
    }

    setLoading(true);
    fetchCharacters();
  }, [page]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h2">Select a hero to learn more</Typography>
          <RingLoader loading={loading} size="100px" color="#EC1D24" />
          <CharacterList characters={characters} />
          {characters.length > 0 &&
            <Pagination className={classes.pagination}
              page={page}
              count={totalPages}
              boundaryCount={3}
              size="large"
              color="primary"
              onChange={handlePagination} />
          }
        </Container>

      </main>
    </ThemeProvider>
  );
}
