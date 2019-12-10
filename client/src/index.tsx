import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import './styles/font.scss';
import './styles/animations.scss';
import './styles/nav.scss';
import './styles/projects.scss';
import './styles/card.scss';
import './styles/loading.scss';

import Main from './components/Main'

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
