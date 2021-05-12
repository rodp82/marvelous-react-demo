import { Card, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import React from 'react'
import { Character } from '../../apis/marvel';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#EC1D24'
    }
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const CharacterCard: React.FC<{ character: Character, clickHandler: any }> = (props) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.character.thumbnail?.path + '/landscape_xlarge.jpg'}
        title="Image title"
        onClick={() => props.clickHandler(props.character)}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" onClick={() => props.clickHandler(props.character)}>
          {props.character.name}
        </Typography>
        {/* <Typography>
                  {props.character.description}
                </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small" color="primary">Comics</Button>
        <Button size="small" color="primary">Events</Button>
        <Button size="small" color="primary">Series</Button>
        <Button size="small" color="primary">Stories</Button>
      </CardActions> */}
    </Card>
  )
}

export default CharacterCard;