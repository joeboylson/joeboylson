import React from 'react';

import {ReactComponent as LogoSVG} from './logo.svg';

export interface LogoProps {
  size?: string;
  fill?: string;
}

const Logo: React.FC<LogoProps> = (Props) => {

  const logoWrapperStyle = {
    width: Props.size || '89px'
  } as React.CSSProperties;

  const logoStyle = {
    fill: Props.fill || 'grey'
  } as React.CSSProperties;

  return (
    <div style={logoWrapperStyle}>
      <LogoSVG style={logoStyle}/>
    </div>
  );
}

export default Logo;