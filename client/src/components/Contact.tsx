import React from 'react';
import Animate from '../utils/Animate';
import Icon from '../utils/Icon';

import { openNewTab } from '../utils/Controls';

import '../styles/pages.scss';

const Contact: React.FC = () => {

  const handleSubmit = (e:any) => {

    e.preventDefault()

    console.log('::: SUBMIT')
  }

  return (
    <div id={'contact'}>

      <div className={'grid'}>
        <div className={'col col-3'}>
          <h1>CONTACT ME</h1>
        </div>
        <div className={'col col-3'}>
          <h3>Let me know if you'd like to . . .</h3>
          <ul>
            <li>Hire me</li>
            <li>Collaborate on a web or photography project</li>
            <li>Ask me a question about something</li>
            <li>Go walk around and shoot photos</li>
            <li>Just get a coffee</li>
          </ul>
        </div>
      </div>

      <form
        id={'contact-form'}
        className={'grid underlined'}
        action=""
        onSubmit={handleSubmit}  
        >

        <Animate
          className={'col col-2 form-control'}
          effect={'fade-up-in'}
          delay={0}
          animateOnLoad
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"/>
        </Animate>

        <Animate
          className={'col col-2 form-control'}
          effect={'fade-up-in'}
          delay={0.1}
          animateOnLoad
        >
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"/>
        </Animate>

        <Animate
          className={'col col-2 form-control'}
          effect={'fade-up-in'}
          delay={0.2}
          animateOnLoad
        >
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"></textarea>
        </Animate>

        <Animate
          className={'col col-2 form-control'}
          effect={'fade-up-in'}
          delay={0.3}
          animateOnLoad
        >
          <button type="submit">SUBMIT</button>
        </Animate>
      </form>

      <div className={'grid'}>

        <Animate
          className={'col col-3 form-control'}
          effect={'fade-up-in'}
        >
          <h3>Or follow/like/connect with me on:</h3>
        </Animate>

        <Animate
          className={'col col-3 icons'}
          effect={'fade-up-in'}
        >
          <Icon 
            className={`blue large`} type={'github'} 
            onClick={() => openNewTab('https://github.com/')}
          />

          <Icon 
            className={`green large`} type={'linkedin'} 
            onClick={() => openNewTab('https://www.linkedin.com/in/joe-boylson-34603b139/')}
          />

          <Icon 
            className={`yellow large`} type={'instagram'} 
            onClick={() => openNewTab('https://www.instagram.com/jobo.jpg/')}
          />
        </Animate>
      </div>
    </div>
  )
} 

export default Contact;