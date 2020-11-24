import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header name={"Rebecca Cheung"} buttonText={"Switch to dark mode"} />
      </>
    </ThemeProvider>
  );
}

export default App;
