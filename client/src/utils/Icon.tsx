import React from 'react';
import { Icon as AntdIcon } from 'antd';
export interface CardProps {
  className?: string;
  id?: string;
  link?: string;
  type: string;
  onClick?: any;
}

const Icon: React.FC<CardProps> = (Props) => {

  return (
    <div 
      className={`icon ${Props.className}`} id={Props.id || ''}
      onClick={Props.onClick}  
    >
      <AntdIcon type={Props.type} />
    </div>
  )

}

export default Icon;