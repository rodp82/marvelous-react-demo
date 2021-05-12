import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import CharacterList from './containers/CharacterList';

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <CharacterList />
      </main>
    </React.Fragment>
  );
}
