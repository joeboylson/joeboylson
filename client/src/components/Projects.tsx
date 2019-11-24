import React from 'react';

import * as projectList from '../projects.json';
import GenerateProject from '../utils/GenerateProject';

const Projects: React.FC = () => {

  let [selectedProject, setSelectedProject] = React.useState(undefined)

  const selectProject = (project: any) => {
    setSelectedProject(undefined);
    let timeout = setTimeout(() => {
      setSelectedProject(project)
      clearTimeout(timeout)
    }, 1)
  }

  return (
    <div className={'grid'}>




      {/* selected project */}
        {selectedProject ? (
          <div>

            <button 
              className={'primary'}
              onClick={() => setSelectedProject(undefined)}
            >
              back
            </button>

            <GenerateProject
              project={selectedProject}
            />
          </div>
        ) : (
          <div className={'col col-3'}>
            <div className={'subgrid'}>
              {projectList.projects.map((project: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`subcol-1 ${ (index+1) % 3 > 0 ? '' : 'subcol-nomarg-desktop'}`}
                    data-fadeupin={index + 1}
                    onClick={() => selectProject(project)}
                  >
                    <div className={'card card-clickable'}>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <p className={'project-technologies'}>{project.technologies}</p>
                    </div>
                  </div>)
              })}
            </div>
          </div>
          )
        }
      </div>
  );
}

export default Projects;