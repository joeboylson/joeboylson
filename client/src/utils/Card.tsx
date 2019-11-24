import React from 'react';
import Icon from './Icon';

export interface CardProps {
  className?: string;
  id?: string
  string: any
}

const Card: React.FC<CardProps> = (Props) => {
  
  const cardStyle = {
    background: 'url(/images/fpd_1/01.jpeg)'
  } as React.CSSProperties;

  return (
    <div className={`card ${Props.className}`}>
      
      <span className={'card-image'} style={cardStyle}/>

      <div className={'card-info'}>
        <div className={'title-time'}>
          <h3>TITLE</h3>
          <p>Novermber 2049</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni, minus similique dicta, architecto, id voluptates reprehenderit rerum placeat nam tenetur perspiciatis exercitationem est inventore nisi amet. Optio quas atque obcaecati quasi.</p>
      </div>

      <div className={'card-footer'}>
        <div className={'card-tags'}>
          <div className={'tag yellow'}>in development</div> 
          <div className={'tag blue'}>private</div> 
          <div className={'tag'}>web</div> 
          <div className={'tag pink'}>photography</div> 
        </div>
        <div className={'card-links'}>
          <Icon className={'blue'} type={'X'}/>
          <Icon className={'blue'} type={'X'}/>
          <Icon className={'blue'} type={'X'}/>
        </div>
      </div>
    </div>
  )

}

export default Card;