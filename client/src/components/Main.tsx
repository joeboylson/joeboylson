import React from 'react';
import Nav from './Nav'

import '../styles/pages.scss'

// pages
import Index from './Index'

const Main: React.FC = (Props) => {

  const [route, setRoute] = React.useState('index')

  const routes:any = {
    index: Index,
    projects: () => <p>projects</p> ,
    about: () => <p>about</p> ,
    contact: () => <p>contact</p> 
  }

  const Component = routes[route]

  return (    
    <main>
      <Nav setRoute={setRoute}/> 
      <Component setRoute={setRoute}/>
    </main>
  )

}

export default Main;