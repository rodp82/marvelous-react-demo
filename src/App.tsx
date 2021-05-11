import React from 'react';
import { /* Typography, */ CssBaseline } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CharacterList from './containers/CharacterList';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));


export default function App() {

  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <CharacterList />
      </main>
      {/* Footer
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      End footer */}
    </React.Fragment>
  );
}
