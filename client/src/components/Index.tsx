import React from 'react';
import Animate from '../utils/Animate';
import { useHistory } from "react-router-dom";

const Index: React.FC = () => {

  const history = useHistory()

  return (    
    <div id={'index'} className={'grid'}>

      <Animate 
        className={'col col-3 border-bottom'} 
        effect={'fade-up-in'}
      >
        <h1>Hi, I'm Joe</h1>
        <h3>Creative Technologist</h3>
      </Animate>

      <Animate 
        className={'col col-1'}
        effect={'fade-up-in'}  
        delay={0.1}
      >
        <p>I'm a student at the University of Cincinnati working towards a Bachelor of Science in Software Development.</p>
        <p>Between school and work, I like to shoot photos and create websites (like this one).</p>
        <p>
          I'm very interested in Web Design, UI/UX, Graphic Design, and Branding and hope to one day use all my skills
          to help clients cultivate their online identity.
        </p>
      </Animate>

      <Animate 
        className={'col col-1'}
        effect={'fade-up-in'}
      >
        <div className={'col col-1'}>
          <img src={'/images/profile_photo.jpg'} alt=""/>
          <p>From Joshua tree last December:</p>
        </div>
      </Animate>

      <Animate 
        className={'col col-1 nomarg-desktop col-1-tablet nomarg-tablet skills'}
        effect={'fade-up-in'}
        delay={0.2}
      >
        <h3>What I Do:</h3>
        <ul>
          <li>Full Stack Development</li>
          <li>Web Design</li>
          <li>Photography</li>
        </ul>
      </Animate>



      <Animate 
        className={'col col-1 col-2-tablet split-text action-box hoverable'}
        onClick={() => history.push('/projects')}
        effect={'fade-up-in'}
        delay={0.1}
      >
        <h3>View My Projects</h3>
      </Animate>

      <Animate 
        className={'col col-1 split-text action-box hoverable'}
        onClick={() => history.push('/contact')}
        effect={'fade-up-in'}
        delay={0.2}
      >
        <h3>Get In Touch</h3>
      </Animate>

      <Animate 
        className={'col col-1 nomarg-desktop nomarg-tablet split-text action-box hoverable'}
        onClick={() => history.push('/about')}
        effect={'fade-up-in'}
        delay={0.3}
      >
        <h3>More About Me</h3>
      </Animate>

    </div>
  )

}

export default Index;