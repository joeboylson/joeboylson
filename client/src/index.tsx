import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/main.scss';
import './styles/font.scss';
import './styles/animations.scss';
import './styles/projects.scss';

import Projects from './components/Projects'

ReactDOM.render(
  <main>

    <Projects />



    {/* <div className={'col col-1 col-1-tablet allow-overflow'} data-fadeupin={2}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur quaerat ratione quis non sapiente, nesciunt, distinctio nostrum neque veniam, obcaecati odit maxime eius dolores! Culpa consequatur est in corrupti error nihil assumenda laborum optio beatae amet debitis, libero aspernatur similique. Sunt, vel. Ea iusto fuga distinctio reprehenderit, nisi repellat eius necessitatibus, quisquam, hic odio similique omnis facilis repudiandae sint voluptatibus porro autem. Tenetur facilis esse error tempore praesentium nam quis autem molestias, perferendis cumque? Tempora adipisci perspiciatis et reiciendis itaque praesentium? Eaque numquam repellat, facere nostrum, ipsa labore praesentium assumenda laudantium ullam expedita similique! Nesciunt dolor eos sit quos.
      </p>
    </div>

    <div className={'col col-1'} data-fadeupin={0}>
      <button className={'primary'}>PRIMARY</button>
      <button className={'ghost'}>GHOST</button>
      <button className={'link'}>LINK</button>
    </div>

    <div className={'col col-1 nomarg-tablet nomarg-desktop'} data-fadeupin={1}> 
      <p>
        Paragraph: <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, error. Maxime reiciendis deserunt, ex recusandae, aperiam aliquam distinctio consequatur veniam iure, cumque non. Doloremque sapiente vitae recusandae libero eius aperiam reiciendis molestias. 
      </p>
    </div>

    <div className={'col col-1 col-1-tablet nomarg-tablet'} data-fadeupin={2}>
    </div>

    <div className={'col col-1 col-1-tablet nomarg-tablet'} data-fadeupin={2}>
      <img src="https://via.placeholder.com/1500" alt="" />
    </div>    
    
    <div className={'col col-1 col-1-tablet nomarg-desktop'} data-fadeupin={2}>
      <img src="https://via.placeholder.com/1500" alt="" />
    </div>    
    

    <div className={'col col-2 nomarg-tablet col-1-tablet'} data-fadeupin={3}>
      <h1>Creative Technologist</h1>
      <h2>Header Two</h2>
      <h3>Header Three</h3>    
    </div>

    <p className={'col col-1 nomarg-desktop col-2-tablet'} data-fadeupin={4}>+</p>
    <p className={'col col-1'} data-fadeupin={5}>+</p>
    <p className={'col col-1'} data-fadeupin={6}>+</p>
    <p className={'col col-1 nomarg-desktop'} data-fadeupin={7}>+</p> */}
  </main>
  ,document.getElementById('root'));

serviceWorker.unregister();
