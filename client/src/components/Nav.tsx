import React from 'react';
import Icon from '../utils/Icon'

const Nav: React.FC = (Props) => {

  const [navIsOpen, setNavIsOpen] = React.useState(false)

  return (
    <div id={'nav'}
      onClick={() => setNavIsOpen(!navIsOpen)}
    >

      <div className={`nav-links ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>Index</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>Projects</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>About</h2>

        <div className={'nav-icons'}>
          <Icon className={`blue ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'github'} />
          <Icon className={`green ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'linkedin'} />
          <Icon className={`yellow ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'instagram'} />
        </div>

      </div>

      <div className={`menu-icon ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>
        <Icon className={`transparent ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'menu'} />
      </div>

    </div>
  )

}

export default Nav;