import React from 'react';
import { routes } from './Main'

export interface NavProps {
  setRoute: any
}

const Nav: React.FC<NavProps> = (Props) => {

  const [navIsOpen, setNavIsOpen] = React.useState(false)

  const navLinks = Object.keys(routes).map( (routeName:any) => {
    return { 
      name: routeName.charAt(0).toUpperCase() + routeName.slice(1), 
      route: routeName
    }
  })

  return (
    <div id={'nav'}
      onClick={() => setNavIsOpen(!navIsOpen)}
      className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}
    >

      <div className={`menu-icon ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>
      </div>

      <div className={`nav-links ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>

        {navLinks.map((link: any, index: number) => {
          return <h3
            key={index}
            className={`nav-link ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}
            onClick={() => Props.setRoute(link.route)}
          >
            {link.name}
          </h3>
        })}
      </div>

      <div className={'nav-caption'}>
        <p className={'mono'}>Portfolio 2020 &nbsp; // &nbsp; joeboylson.us</p>
      </div>

    </div>
  )

}

export default Nav;