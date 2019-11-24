import React from 'react';

export interface GenerateProjectProps {
  project: any
}

const GenerateProject: React.FC<GenerateProjectProps> = (Props) => {

  return (
    <div className={'project fade-up-in'}>
    
      <div className={'project-header'}>
        <h1>{Props.project.name}</h1>
      </div>

      { Props.project.sections && 
        <div className={'section'}>
          { Props.project.sections.map((section:any, index:number) => {
            return <div key={index}>
              { section.subtitle &&
                <h3>{section.subtitle || ''}</h3>
              }
              
              { section.text &&
                <div className={'section-text'}>
                  { section.text.map((text:string, index:number) => {
                    return <p key={index}>{text}</p>
                  })}
                </div>
              }


              { section.images && 
                <div className={'subgrid'}>
                  { section.images.map((url:string, index:number) => {
                    return <div className={`subcol-1 ${(index+1) % 2 > 0 ? '' : 'subcol-nomarg-desktop'}`}>
                      <img 
                        key={index} 
                        src={process.env.PUBLIC_URL + url}
                        alt=""
                      />
                    </ div> 
                  })

                  }
                </div>
              }

            </div>

          })}
        </div>
      }

    </div>
  );
}

export default GenerateProject;