import React from 'react';
import Icon from '../utils/Icon'

const Nav: React.FC = (Props) => {

  const [navIsOpen, setNavIsOpen] = React.useState(false)

  return (
    <div id={'nav'}
      onClick={() => setNavIsOpen(!navIsOpen)}
    >

      <div className={`nav-links ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>
        <div className={'nav-icons'}>
          <Icon className={`blue ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'x'} />
          <Icon className={`green ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'x'} />
          <Icon className={`yellow ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`} type={'x'} />
        </div>

        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>
        <h2 className={`${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>LINK</h2>

      </div>

      <div className={`menu-icon ${navIsOpen ? 'nav-is-open' : 'nav-is-closed'}`}>
        <p>X</p>
      </div>

    </div>
  )

}

export default Nav;