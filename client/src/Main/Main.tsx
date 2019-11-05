import React from 'react';

import { Router } from '../Router/Router';
import Index from '../Pages/Index';
import Projects from '../Pages/Projects';
import About from '../Pages/About';
import Timeline from '../Pages/Timeline';

const Main: React.FC = () => {

  const context: any = React.useContext(Router)
  const route = context['route']
  const setRoute = context['setRoute']

  const pages = [
    {
      component: Index,
      route: ''
    },
    {
      component: Projects,
      route: 'projects'
    },
    {
      component: About,
      route: 'about'
    },
    {
      component: Timeline,
      route: 'timeline'
    }
    
  ]

  const Component:any = ( pages.find(page => page.route === route) )

  return (
      <main onClick={() => setRoute('about')}>
        { Component && 
          <Component.component />
        }
      </main>
  );
}

export default Main;