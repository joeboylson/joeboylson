import React from 'react';
import { useHistory } from 'react-router-dom';

// components
import Animate from '../utils/Animate';
import Icon from '../utils/Icon'

// style
import '../styles/pages.scss';

// project props
export interface ProjectProps {
  project: any;
  setRoute?: any;
}

const Project: React.FC<ProjectProps> = (Props) => {
  const history:any = useHistory();

  const project = Props.project;

  return (
    <div className={'project grid'}>

      <Animate 
        className={'col col-3 controls'}
        effect={'fade-up-in'}
      >
        <Icon 
          type="close" 
          onClick={() => history.push('/projects')}  
        />
      </Animate>

      <div className={'col col-2 title-image'}>
        <img src={project.title_image} alt=""/>
      </div>

      <div className={'col col-1 nomarg-desktop'}>

        <div className="header-entry">
          <h3>{project.name}</h3>
        </div>

        <div className="header-entry">
          <strong>Context:</strong>
          <p>{project.context || '[no context]'}</p>
        </div>

        { project.with &&
          <div className="header-entry">
            <strong>With:</strong>
            <p>{project.with}</p>
          </div>
        }

        <div className="header-entry">
          <strong>Role:</strong>
          <p>{project.role || '[no role]'}</p>
        </div>

        <div className="header-entry">
          <strong>Technologies:</strong>
          <p>{project.technologies || '[no technologies]'}</p>
        </div>

        { project.links &&
          <div className="header-entry">
            <strong>Links:</strong>
            { project.links.map((link:any, index:number) => {
              return <p key={`link-${index}`}>
                <a href={link.href} target={'__blank'}>{link.text}</a>
              </p> 
            })}
          </div>
        }

        { project.synopsis &&
          <div className="header-entry">
            <strong>Synopsis:</strong>
            <p>{project.synopsis}</p>
          </div>
        }





      </div>

      { Props.project.sections.map((section:any, index:any) => {
        return (
          <div key={`section-${index}`} className={'col col-2'}> 
            <strong>{section.header}</strong>
          </div>
        )
      })}

    </div>
  )}

export default Project; 