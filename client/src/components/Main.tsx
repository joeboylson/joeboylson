import React from 'react';
import Nav from './Nav'

import '../styles/pages.scss'

// js
import { loadImages } from '../js/loadImages';

// pages
import Index from './Index';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import PresetList from './Presets';

const routes:any = {
  index: Index,
  projects: Projects,
  about: About,
  contact: Contact,
  presets: PresetList
}

const downloadUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : ''

const imagesToPreload = [
  '/images/fpd_1/01.jpg',
  '/images/fpd_1/02.jpg',
  '/images/fpd_1/03.jpg',
  '/images/fpd_1/04.jpg',
  '/images/fpd_1/05.jpg',
  '/images/preset_Pendleton/before.jpg',
  '/images/preset_Pendleton/after.jpg',
  '/images/about_photo.jpg',
  '/images/profile_photo.jpg',
];

// ----- ----- ----- -----
// MAIN  ----- ----- -----
// ----- ----- ----- -----

const Main: React.FC = (Props) => {

  const getDefaultRoute = () => {
    return Object.keys(routes).includes( window.location.pathname.slice(1) ) ? window.location.pathname.slice(1) : 'index'
  }
  
  const [route, setRoute] = React.useState( getDefaultRoute() )
  const [imagesAreLoaded, setImagesAreLoaded] = React.useState(false)
  const Component = routes[route]

  const loadingContainerRef = React.useRef(null)

  // handling route forwards and backwards
  window.history.pushState(null, '', route)
  window.onpopstate = () => { setRoute( getDefaultRoute() ) }

  React.useEffect(() => {
    if (!imagesAreLoaded) {
      loadImages(imagesToPreload, () => setImagesAreLoaded(true), loadingContainerRef.current)
    }
  }, [imagesAreLoaded])
  
  return (    
    <main>

      { imagesAreLoaded ? (
        <div>
          <Nav setRoute={setRoute}/> 
          { Component &&
            <Component setRoute={setRoute}/>
          }
        </div>
      ) : (
        <div id={'loading-images-container'} ref={loadingContainerRef}>
          <div className={'images-statusbar'}></div>
          <p className={'underlined'}>Loading Images</p>
        </div>
      ) }

    </main>
  )
}

export default Main;
export { routes, downloadUrl };