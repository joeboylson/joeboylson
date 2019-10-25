import React, {Dispatch, SetStateAction} from 'react';
import './Nav.css'

export interface IframeProps {
  api_url: string;
  projectUrls: Array<string>
  setCurrentProject: Dispatch<SetStateAction<string>>;
}


const Nav: React.FC<IframeProps> = (Props) => {

  const [navIsOpen, setNavIsOpen] = React.useState(false)

  return (
    <div id={'nav'} className={navIsOpen ? 'nav-open' : 'nav-closed'}>

      <div onClick={() => setNavIsOpen(!navIsOpen)} id={'nav-expand'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </div>

      <div id={'nav-links-wrapper'}>
        { Props.projectUrls.map((url, index) => {
          return <div 

            key={index}>
              <h3 
                className={'nav-link'}
                onClick={() => {
                  Props.setCurrentProject(url); 
                  setNavIsOpen(false) 
                }} 
              >{url}</h3>
              <a href={`${Props.api_url}/${url}`} target="__blank">View Full</a>
              <a href={`https://github.com/joeboylson/WebGameDevelopment/tree/master/${url}`} target="__blank">View Code</a>
            </div>
        })}
      </div>

    </div>
  );
}

export default Nav;
