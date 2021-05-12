import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './components/Header/Header';
import CharacterList from './containers/CharacterList/CharacterList';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EC1D24'
    }
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <main>
        <CharacterList />
      </main>
    </ThemeProvider>
  );
}
