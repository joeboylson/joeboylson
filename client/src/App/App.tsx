import React from 'react';
import './App.css';

import Router from '../Router/Router';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Logo from '../SVG/Logo';

const App: React.FC = () => {

  return (
    <Router>
      <Nav />

      <div id={'logo-tl'}>
        <Logo size={'34px'} fill={'ghostwhite'}/>
      </div>

      <Main/>
    </Router>
  );
}

export default App;