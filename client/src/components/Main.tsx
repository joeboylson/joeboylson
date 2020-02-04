import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../styles/pages.scss'
import { loadImages } from '../js/loadImages';


// components
import Nav from './Nav';
import Footer from './Footer';
import Index from './Index';
import ProjectList from './ProjectList';
import About from './About';
import Contact from './Contact';
import PresetList from './Presets';

const routes:any = {
  index: Index,
  projects: ProjectList,
  about: About,
  contact: Contact,
  presets: PresetList
}

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

loadImages(imagesToPreload, () => {})


const Main: React.FC = () => {

  const scroll = () => {
    let root:any = document.getElementById('root')
    if (root) { root.scrollIntoView(true, 'smooth') }
  }
  
  return (    
    <main>
      <div id="top-spacer"></div>
      <Router>
        <Nav/> 
        <Switch>

          <Route 
            exact path={['/index', '/']}
            render={() => {
              scroll()
              return <Index />
            }}
          />

          <Route
            exact path={['/projects', '/projects/:projectIndex']}
            render={(props:any) => {
              console.log(props)
              return <ProjectList projectIndex={props.match.params.projectIndex}/>;
            }}
          />
          
          <Route path="/about">
            <About />
          </Route>

          <Route 
            exact path="/contact"
            render={() => {
              scroll()
              return <Contact />
            }}  
          />

          <Route 
            exact path="/presets"
            render={() => {
              scroll()
              return <PresetList />
            }}  
          />

        </Switch>
      </Router>

      { ReactDOM.createPortal(         
          <Footer />,
          document.body
      ) }
    </main>
  )
}

export default Main;
export { routes }