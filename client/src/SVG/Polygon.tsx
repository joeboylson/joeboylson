import React from 'react';

import {ReactComponent as PolygonSVG} from './polygon.svg';

export interface PolygonProps {
  size?: string;
  fill?: string;
}

const Polygon: React.FC<PolygonProps> = (Props) => {

  const logoWrapperStyle = {
    width: Props.size || '89px'
  } as React.CSSProperties;

  const logoStyle = {
    fill: Props.fill || 'grey'
  } as React.CSSProperties;

  return (
    <div style={logoWrapperStyle}>
      <PolygonSVG style={logoStyle}/>
    </div>
  );
}

export default Polygon;