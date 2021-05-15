import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { Character } from '../../models';

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
      </CardContent>
    </Card>
  )
}

export default CharacterCard;