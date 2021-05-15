import { Backdrop, Button, Fade, Grid, makeStyles, Modal, Paper } from '@material-ui/core';
import React from 'react'
import { Character } from '../../models';

const useStyles = makeStyles((theme) => ({
  root: {

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
    padding: theme.spacing(2),
    width: '825px'
  },
  img: {

  },
  button: {
    margin: '0 5px' 
  }
}));

const CharacterDetail: React.FC<{ character: Character, open: boolean, closeHandler: any }> = (props) => {
  const classes = useStyles();

  const { character, open, closeHandler } = props;

  return (
    
    <Modal className={classes.modal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={closeHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} sm={4}>
              <img className={classes.img} alt="complex" src={props.character.thumbnail?.path + '/standard_xlarge.jpg'} />
            </Grid>
            <Grid item xs={12} sm={8} container direction="column">
              <Grid item xs>
                <h2 id="modal-title">{character.name}</h2>
              </Grid>
              <Grid item xs>
                <p id="modal-description">{character.description?.length ? character.description : 'No description available'}</p>
              </Grid>
              <Grid item xs>
                <Button size="small" color="primary" variant="outlined" className={classes.button}>
                  Comics ({character.comics?.available})</Button>
                <Button size="small" color="primary" variant="outlined" className={classes.button}>
                  Events ({character.events?.available})</Button>
                <Button size="small" color="primary" variant="outlined" className={classes.button}>
                  Series ({character.series?.available})</Button>
                <Button size="small" color="primary" variant="outlined" className={classes.button}>
                  Stories ({character.stories?.available})</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper >
      </Fade>
    </Modal>
  )
}

export default CharacterDetail;
