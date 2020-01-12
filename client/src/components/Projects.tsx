import React from 'react';
import Animate from '../utils/Animate';
import Icon from '../utils/Icon'

import '../styles/pages.scss'
import { projects } from '../projects.json'

const Projects: React.FC = () => {

  const [selectedProject, setSelectedProject] = React.useState()

  return (

    <div id={'projects'} className={'grid'}>

    { selectedProject ? (
      <div className={'project grid'}>

        <Icon 
          onClick={() => setSelectedProject(null) } 
          type={'close'}
          className={'project-close-icon pink large'}
        />

        <Animate 
          className={'col col-3'}
          effect={'fade-up-in'}  
        >
          <h1>{selectedProject.name}</h1>
        </Animate>

        { selectedProject.sections.map((section:any, sectionIndex:any) => {
          return <Animate
            animateOnLoad
            delay={sectionIndex/10}
            className={'col col-2 section subgrid'} 
            effect={'fade-up-in'} 
            key={`section-${sectionIndex}`}>
            <h3>{ section.header }</h3>

            { section.items.map((item:any, itemIndex:number) => {

              let itemKey = `item-${itemIndex}`;

              if (item.type === 'link') {
                return <a 
                  key={itemKey} 
                  href={item.text}
                  className={'link-like-button'}  
                >{item.title || item.text}</a>
              }

              if (item.type === 'image') {
                return <div className={'col col-1'}>
                  <img src={item.src} alt=""/>
                </div> 
              }

              return <p
                key={itemKey}>{ item }</p>
            })

            }
          </Animate>
        })

        }
      </div>
    ) : (

      <div className={'grid'}>



    <Animate className={'col col-3 header'} effect={'fade-up-in'} animateOnLoad>
      <h1>Projects</h1>

      <p className={'header-text'}></p>

    </Animate>

      { projects.map((project:any, index:number) => {

        let itemClassName = `
          col 
          col-1 
          ${ (index+1) % 3 === 0 ? 'nomarg-desktop' : ''} 
          ${ (index+1) % 2 === 0 ? 'nomarg-tablet' : ''} 
          project-li
        `;

        return (
          <Animate
            key={index}
            className={itemClassName}
            effect={'fade-up-in'}
            animateOnLoad
            delay={ index/10 }
            onClick={ () => setSelectedProject(project) }
          >
            <div className={'project-li-inner'}>
              <p className={'mono'}>{index}</p>
              <h3>{ project.name }</h3>
              { project.description &&
                <p>{ project.description }</p>
              }
              <p className={'mono'}>{ project.date }</p>
            </div>
          </Animate>

        )})

        
        
      }
    </div>

    )}
  </div>

  );
}

export default Projects;