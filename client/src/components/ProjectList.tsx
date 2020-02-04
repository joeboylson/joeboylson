import React from 'react';
import { useHistory } from 'react-router-dom';
import { projects } from '../projects.json';
import Project from './Project';

export interface ProjectListProps {
  project?: any;
  projectIndex?: number;
}

const ProjectList:React.FC<ProjectListProps> = (Props) => {

  const history:any = useHistory();
  const selectedProject = Props.projectIndex ? projects[Props.projectIndex] : null;

  return (
    <div id={'project-list'} className={'grid'}>

      { projects.map((project:any, index:number) => {

        let staticStyle = 'project-li col col-1 col-1-tablet';
        let columnStyle = `${(index+1) % 3 === 0 ? 'nomarg-desktop' : ''} ${(index+1) % 2 === 0 ? 'nomarg-tablet' : ''}`;
        let collapseStyle = `${selectedProject ? 'collapse' : ''}`

        return ( 
          <div
            key={index}
            onClick={() => history.push(`/projects/${index}`)}
            className={`${staticStyle} ${columnStyle} ${collapseStyle}`}
          >
            <div className="content">
              <strong>{index}. {project.name}</strong>
              <p>{project.description}</p>
              <p className={'project-date'}>{project.date}</p>
            </div>
          </div>
        )
      })}

      <div className={'project'}>
        { selectedProject ? (
          <Project project={selectedProject} />
        ) : (
          <div className={'extra-space'}></div>
        )}
      </div>
    </div>
  )
}

export default ProjectList;