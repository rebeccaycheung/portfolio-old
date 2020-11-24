import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Spacing } from './styles/body';
import Header from './components/Header';
import About from './components/About';
import Journey from './components/Journey';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header name={"Rebecca Cheung"} buttonText={"Switch to dark mode"} />
        <Spacing space={2} />
        <About title={"Get to know me"} description={
          "I am passionate about developing software and designing sophisticated user interfaces. Currently, an associate engineer at NAB developing digital lending experiences to our customers. While I am not working, I am cooking or enjoying time with family and friends."
        }/>
        <Spacing space={2} />
        <Journey title="My journey so far" />
      </>
    </ThemeProvider>
  );
}

export default App;
