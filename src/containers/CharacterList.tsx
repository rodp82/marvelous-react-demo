import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Character, getCharacters } from '../apis/marvel';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
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
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={character.thumbnail?.path + '/landscape_xlarge.jpg'}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {character.name}
                </Typography>
                {/* <Typography>
                  {character.description}
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Comics</Button>
                <Button size="small" color="primary">Events</Button>
                <Button size="small" color="primary">Series</Button>
                <Button size="small" color="primary">Stories</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CharacterList
