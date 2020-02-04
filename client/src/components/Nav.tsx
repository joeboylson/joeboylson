import React from 'react';
import { routes } from './Main'
import { useHistory } from "react-router-dom";

const Nav: React.FC = () => {

  const history = useHistory()

  const [navIsOpen, setNavIsOpen] = React.useState(false)

  // eslint-disable-next-line
  const filteredRoutes = Object.keys(routes).filter( (_route:string) => {
    if (!_route.includes('/')) return _route;
  })

  const navLinks = filteredRoutes.map( (routeName:any) => {
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
            onClick={() => history.push(`/${link.route}`)}
          >
            {link.name}
          </h3>
        })}
      </div>

      <div className={'nav-caption'}>
        <p>Portfolio 2020 &nbsp; // &nbsp; joeboylson.us</p>
      </div>

    </div>
  )

}

export default Nav;