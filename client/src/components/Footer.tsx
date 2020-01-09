import React from 'react';
import { Icon } from 'antd';

import '../styles/footer.scss'

import { openNewTab } from '../utils/Controls';

const Footer: React.FC = () => {
  return (
    <div id={'footer-root'}>
      <div className={'grid'}>
        <div className={'col col-2'}>
          <div id={'social-box'}>
            <h3>Let's Connect:</h3>
            <Icon type={'github'} onClick={() => openNewTab('https://github.com/')}/>
            <Icon type={'instagram'} onClick={() => openNewTab('https://www.instagram.com/jobo.jpg/')}/>
            <Icon type={'linkedin'} onClick={() => openNewTab('https://www.linkedin.com/in/joe-boylson-34603b139/')}/>
            <Icon type={'youtube'} onClick={() => openNewTab('https://www.youtube.com/channel/UChz40ooXT1CfjVAjkueETUw')}/>
          </div>
        </div>
        <div className={'col col-1 nomarg-desktop'}>
          <div id={'contact-details'}>
            <p>Joe Boylson</p>
            <a href={'mailto:joeboylson@gmail.com'}>joeboylson@gmail.com</a>
            <p>+1 513.667.2371</p>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Footer;



