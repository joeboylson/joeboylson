import React from 'react';
import Animate from '../utils/Animate';

import '../styles/pages.scss';
import { projects } from '../projects.json';

export interface ProjectListProps {
  setRoute: any;
}

const ProjectList: React.FC<ProjectListProps> = (Props) => {

  return (
    <div id={'projects'} className={'grid'}>
      <div className={'grid'}>

        <Animate className={'col col-3 header'} effect={'fade-up-in'} animateOnLoad>
          <h1>Projects</h1>
          <p className={'header-text'}></p>
        </Animate>

        { projects.map((project: any, index: number) => {

          let itemClassName = `
          col 
          col-1 
          ${ (index + 1) % 3 === 0 ? 'nomarg-desktop' : ''} 
          ${ (index + 1) % 2 === 0 ? 'nomarg-tablet' : ''} 
          project-li
        `;

          return (
            <Animate
              key={index}
              className={itemClassName}
              effect={'fade-up-in'}
              animateOnLoad
              delay={index / 10}
              onClick={() => Props.setRoute(`projects/${index}`)}
            >
              <div className={'project-li-inner'}>
                <p className={'mono'}>{index}</p>
                <h3>{project.name}</h3>
                {project.description &&
                  <p>{project.description}</p>
                }
                <p className={'mono'}>{project.date}</p>
              </div>
            </Animate>

          )
        })



        }
      </div>
    </div>

  );
}

export default ProjectList;