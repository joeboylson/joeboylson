import React from 'react';
import './Nav.css';

import { Router } from '../Router/Router';
import Polygon from '../SVG/Polygon';


const Nav: React.FC = () => {

  const context: any = React.useContext(Router)
  const route = context['route']
  const setRoute = context['setRoute']

  const [expanded, setExpanded] = React.useState(false);

  console.log(route === '')

  return (
    <div 
      id={'nav'}
      className={`${expanded ? 'nav-is-open' : 'nav-is-closed'} ${route === '' ? 'nav-hidden' : '' }`}  
      onClick={() => setExpanded(!expanded)}  
    >

      {/* SVG */}

      <div 
        id={'svg'}
        className={expanded ? 'svg-is-open' : 'svg-is-closed'}
        onClick={() => setExpanded(!expanded)}  
      >
        <Polygon size={'2000px'} fill={'ghostwhite'} />
      </div>

      {/* LINKS */}

      <div
        id={'links'}
        className={expanded ? 'links-is-open' : 'links-is-closed'}
      >

        <h1 
          className={'nav-link'} 
          style={{transitionDelay: expanded ? '0.0s' : '0s'}}
          onClick={() => setRoute('')}  
        >
          INDEX
        </h1>

        <h1 
          className={'nav-link'} 
          style={{transitionDelay: expanded ? '0.1s' : '0s'}}
          onClick={() => setRoute('projects')}  
        >
          PROJECTS
        </h1>
        
        <h1 
          className={'nav-link'} 
          style={{transitionDelay: expanded ? '0.2s' : '0s'}}
          onClick={() => setRoute('about')}  
        >
          ABOUT
        </h1>

        <h1 
          className={'nav-link'} 
          style={{transitionDelay: expanded ? '0.3s' : '0s'}}
          onClick={() => setRoute('timeline')}  
        >
          TIMELINE
        </h1>

      </div>

    </div>
  );
}

export default Nav;