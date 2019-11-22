import React from 'react';

import * as projectList from '../projects.json';
import GenerateProject from '../utils/GenerateProject';

const Projects: React.FC = () => {

  let [selectedProject, setSelectedProject] = React.useState(undefined)

  const selectProject = (project:any) => {
    setSelectedProject(undefined); 
    let timeout = setTimeout(() => {
      setSelectedProject(project)
      clearTimeout(timeout)
    }, 1)
  }

  return (
    <div className={'grid'}>

      {/* project list */}
      <div className={`col col-1 col-2-tablet ${selectedProject ? 'tablet-hide' : ''}`}>
        <div id={'project-list'}>
          {projectList.projects.map((project: any, index: number) => {
            return (
              <div
                key={index}
                className={'card card-clickable'}
                data-fadeupin={index + 1}
                onClick={() => selectProject(project)}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className={'project-technologies'}>{project.technologies}</p>
              </div>)
          })}
        </div>

      </div>


      {/* selected project */}
      <div className={`col-2 nomarg-desktop ${!selectedProject ? 'tablet-hide' : ''}`}>

        <div className={'tablet-show'}>
          <button 
            className={'primary'}
            onClick={() => setSelectedProject(undefined)}
          >
            back
          </button>
        </div>

        {selectedProject ? (
          <GenerateProject
            project={selectedProject}
          />
        ) : (
          <p className={'fade-up-in'}>Select a project from the list</p>
        )
        }

      </div>


    </div>
  );
}

export default Projects;