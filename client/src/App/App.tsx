import React from 'react';
import './App.css';

import Iframe from '../Iframe/Iframe'
import Nav from '../Nav/Nav'
import axios from 'axios';

const App: React.FC = () => {

  const API_URL = process.env.NODE_ENV === 'development' ? 'https://web-game-development.herokuapp.com' : '';

  const [projects, setProjects] = React.useState([])
  const [currentProject, setCurrentProject] = React.useState(projects[0] || '')

  React.useEffect(() => {
    axios.get(`${API_URL}/projects`)
    .then(response => {
      setProjects(response.data)
      setCurrentProject(response.data[0])
    })
  }, [])

  console.log(currentProject)

  return (
    <div id={'main'}>
      { projects.length ? (
        <div>
          <Nav api_url={API_URL} projectUrls={projects} setCurrentProject={setCurrentProject}/>
          <Iframe projectUrl={`${API_URL}/${currentProject}`}/>
        </div>
      ) : (
        <p style={{color: 'black', padding: '55px'}}>No projects available</p>
      )}
    </div>
  );
}

export default App;
