import React from 'react';
import Nav from './Nav'

import '../styles/pages.scss'

// pages
import Index from './Index'
import PresetList from './Presets'

const routes:any = {
  index: Index,
  projects: () => <h3>Page Coming Soon!</h3>,
  about: () => <h3>Page Coming Soon!</h3>,
  contact: () => <h3>Page Coming Soon!</h3>,
  presets: PresetList
}

const downloadUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''



// ----- ----- ----- -----
// MAIN  ----- ----- -----
// ----- ----- ----- -----

const Main: React.FC = (Props) => {

  const getDefaultRoute = () => {
    return Object.keys(routes).includes( window.location.pathname.slice(1) ) ? window.location.pathname.slice(1) : 'index'
  }
  
  const [route, setRoute] = React.useState( getDefaultRoute() )
  const Component = routes[route]

  // handling route forwards and backwards
  window.history.pushState(null, '', route)
  window.onpopstate = () => { setRoute( getDefaultRoute() ) }

  return (    
    <main>
      <Nav setRoute={setRoute}/> 
      { Component &&
        <Component setRoute={setRoute}/>
      }
    </main>
  )
}

export default Main;
export { routes, downloadUrl };