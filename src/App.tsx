import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Spacing, Width } from './styles/body';
import Header from './components/Header';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Width width={80}>
          <Header name={"Rebecca Cheung"} buttonText={"Switch to dark mode"} />
          <Spacing space={2} />
          <About title={"Get to know me"} description={
            "I am passionate about developing software and designing sophisticated user interfaces. Currently, an associate engineer at NAB developing digital lending experiences to our customers. While I am not working, I am cooking or enjoying time with family and friends."
          }/>
          <Spacing space={2} />
          <Journey title="My journey so far" />
          <Spacing space={2} />
        </Width>
        <Skills title="Skilled in" />
        <Width width={80}>
          <Spacing space={2} />
          <Projects title="Projects I've worked on" />
        </Width>
      </>
    </ThemeProvider>
  );
}

export default App;
