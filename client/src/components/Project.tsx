import React from 'react';

// components
import Animate from '../utils/Animate';
import Icon from '../utils/Icon'

// style
import '../styles/pages.scss'

// project props
export interface ProjectProps {
  project: any;
  setRoute?: any;
}

const Project: React.FC<ProjectProps> = (Props) => {

  return (
      <div className={'project grid'}>

        <Icon 
          onClick={() => Props.setRoute('projects') } 
          type={'close'}
          className={'project-close-icon pink large'}
        />

        <Animate 
          className={'col col-3'}
          effect={'fade-up-in'}  
        >
          <h1>{Props.project.name}</h1>
        </Animate>

        { Props.project.sections.map((section:any, sectionIndex:any) => {
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
                return <div 
                  key={itemIndex}
                  className={'col col-1'}>
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
  )}

export default Project;