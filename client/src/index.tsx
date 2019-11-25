import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import './styles/font.scss';
import './styles/animations.scss';
import './styles/nav.scss';
import './styles/projects.scss';
import './styles/card.scss';

// import Projects from './components/Projects'
import Nav from './components/Nav'
import Card from './utils/Card';

ReactDOM.render(
  <main>

    <Nav /> 
    
    <div className={'grid'}>
      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet nomarg-desktop'}/>

      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet nomarg-desktop'}/>

      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet'}/>
      <Card string={'string'} className={'col col-1 col-2-tablet nomarg-desktop'}/>
    </div>

  </main>
  , document.getElementById('root'));

serviceWorker.unregister();
