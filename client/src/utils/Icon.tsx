import React from 'react';

export interface CardProps {
  className?: string;
  id?: string;
  link?: string;
  type: string;
}

const Icon: React.FC<CardProps> = (Props) => {

  return (
    <div className={`icon ${Props.className}`} id={Props.id || ''}>
      <p>{Props.type}</p>
    </div>
  )

}

export default Icon;