import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAws, faGithub, faLinkedin, faVuejs, faReact, faNodeJs, faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBreadSlice, faGraduationCap, faLeaf, faMagic, faEnvelope, faMoon } from '@fortawesome/free-solid-svg-icons';

library.add(
  faAws,
  faCode,
  faBreadSlice,
  faGraduationCap,
  faLeaf,
  faMagic,
  faEnvelope,
  faGithub,
  faLinkedin,
  faMoon,
  faVuejs,
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faJs,
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
