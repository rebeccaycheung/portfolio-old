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
            `Hi 👋
            A little bit about me ~
            I am passionate about developing software and designing elegant user interfaces. Currently, an associate engineer at NAB in the Business Lending sector specialising in UI development. Recently, I graduated from Monash University, achieving a Bachelors of Information Technology with a double major in Computer Networks and Security, and Software Development. In my spare time, apart from improving my technical capabilities, I am cooking or baking all sorts of goodies and finding out more ways to live a sustainable lifestyle.`
          }/>
          <Spacing space={2} />
          <Journey title="My journey so far" />
          <Spacing space={2} />
        </Width>
        <Width width={80}>
          <Skills title="Skilled in" />
        </Width>
        <Width width={80}>
          <Spacing space={2} />
          <Projects title="Projects I've worked on" />
        </Width>
      </>
    </ThemeProvider>
  );
}

export default App;
