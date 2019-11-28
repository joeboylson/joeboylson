import React from 'react';

export interface IndexProps {
  setRoute: any
}

const Index: React.FC<IndexProps> = (Props) => {

  return (    
    <div id={'index'} className={'grid'}>

      <div className={'col col-3 border-bottom'}>
        <h1>Hi, I'm Joe</h1>
        <h3>Creative Technologist</h3>
      </div>

      <div className={'col col-1'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magni adipisci tempore nulla ex nisi, asperiores optio aliquid? Fuga voluptas atque possimus, quidem nemo in fugit, modi neque perspiciatis sit praesentium esse.
        </p>
      </div>

      <div className={'col col-2 nomarg-desktop col-1-tablet nomarg-tablet'}>
        <ul>
          <li><h3>Full Stack Development</h3></li>
          <li><h3>Web Design</h3></li>
          <li><h3>Photography</h3></li>
        </ul>
      </div>

      <div className={'col col-3 subgrid border-bottom'}>
        <div className={'col col-1'}>
          <img src="https://via.placeholder.com/500" alt=""/>
        </div>
      </div>

      <div 
        className={'col col-1 col-2-tablet pink split-text action-box hoverable'}
        onClick={() => Props.setRoute('projects')}
      >
        <h3>View my projects</h3>
      </div>

      <div 
        className={'col col-1 blue green split-text action-box hoverable'}
        onClick={() => Props.setRoute('contact')}
      >
        <h3>Get in touch</h3>
      </div>

      <div 
        className={'col col-1 nomarg-desktop nomarg-tablet blue split-text action-box hoverable'}
        onClick={() => Props.setRoute('about')}
      >
        <h3>More about me</h3>
      </div>

    </div>
  )

}

export default Index;