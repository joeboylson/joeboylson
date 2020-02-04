import React from 'react';
import Animate from '../utils/Animate';
import { useHistory } from 'react-router-dom';
import '../styles/pages.scss';

const About: React.FC = () => {

  const history:any = useHistory();
  
  return (

    <div id={'about'} className={'grid'}>

      <Animate 
        className={'col col-3 border-bottom'} 
        effect={'fade-up-in'}
      >
        <h1>About Me</h1>
      </Animate>

      <Animate effect={'fade-up-in'} delay={0.1} animateOnLoad className={'col col-1'}>
        <img src={'/images/about_photo.jpg'} alt=""/>
        
        <div 
          className={'col col-1 split-text action-box hoverable'}
          onClick={() => history.push('/contact')}
        >
          <h3>Get In Touch</h3>
        </div>
      </Animate>

      <div className={'col col-2 nomarg-desktop'}>
        <Animate effect={'fade-up-in'} delay={0.2} animateOnLoad className={'section'}>
          <h3>Full Stack Web Development</h3>
          <p>
            In January of 2018, I was introduced to full-stack web development, and ever since then
            I haven't stopped programming. I've completed 3 coops through the University of 
            Cincinnati, and worked part-time for 3 additional semesters - not to mention the countless
            hours I've spent on various personal projects. 
          </p>
          <p>
            I'm fascinated by the idea of creating a website that is not only easy for the user,
            but also easy for the developer to build, maintain, and upgrade. I'm driven to code less,
            but better, and use practices that encourage speed and modularity.
          </p>
        </Animate>

        <Animate effect={'fade-up-in'} delay={0.3} animateOnLoad className={'section'}>
          <h3>Web Design</h3>
          <p>
            Becoming more and more familiar with the syntax of the code I use, I've found that some
            of my focus has turned to the design of the website and the engineering behind the 
            interface. Although its not part of my school curriculum, I always try my best to
            follow the best practices of design.
          </p>
          <p>
            What really interests me is the combination of the technical development and the aesthetic
            design of a website. How can the aesthetics and the functions of a website work 
            together? How can the developer and the designer work together?
          </p>
        </Animate>

        <Animate effect={'fade-up-in'} delay={0.4} animateOnLoad className={'section'}>
          <h3>Photography</h3>
          <p>
            I've been shooting photography for about 7 years. I shoot a version of 
            street photography that focuses on light and shadow, as well as people and scenes.
          </p>
          <p>
            I think of photography as capturing a moment; I want to capture the feel of a place, or
            an ironic moment in time. Having looked through a viewfinder for so long, I'm very aware 
            of lighting, geometry, contrast, and shape.
          </p>
          <p>
            For now, my photography portfolio lives on Instagram
            : <a href="https://www.instagram.com/jobo.jpg/">check it out and let me know what you think</a>
            .
          </p>
        </Animate>

      </div>

    </div>

  )
} 

export default About;