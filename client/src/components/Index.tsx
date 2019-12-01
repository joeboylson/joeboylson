import React from 'react';
import Animate from '../utils/Animate';

export interface IndexProps {
  setRoute: any
}

const Index: React.FC<IndexProps> = (Props) => {

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
        className={'col col-2 nomarg-desktop col-1-tablet nomarg-tablet skills'}
        effect={'fade-up-in'}
        delay={0.2}
      >
        <h3>What I do:</h3>
        <ul>
          <li>Full Stack Development</li>
          <li>Web Design</li>
          <li>Photography</li>
        </ul>
      </Animate>

      <Animate 
        className={'col col-3 subgrid border-bottom'}
        effect={'fade-up-in'}
      >
        <div className={'col col-1'}>
          <p>From Joshua tree last December:</p>
          <img src={'/images/profile_photo.jpg'} alt=""/>
        </div>
      </Animate>

      <Animate 
        className={'col col-1 col-2-tablet pink split-text action-box hoverable'}
        onClick={() => Props.setRoute('projects')}
        effect={'fade-up-in'}
        delay={0.1}
      >
        <h3>View my projects</h3>
      </Animate>

      <Animate 
        className={'col col-1 blue green split-text action-box hoverable'}
        onClick={() => Props.setRoute('contact')}
        effect={'fade-up-in'}
        delay={0.2}
      >
        <h3>Get in touch</h3>
      </Animate>

      <Animate 
        className={'col col-1 nomarg-desktop nomarg-tablet blue split-text action-box hoverable'}
        onClick={() => Props.setRoute('about')}
        effect={'fade-up-in'}
        delay={0.3}
      >
        <h3>More about me</h3>
      </Animate>

    </div>
  )

}

export default Index;