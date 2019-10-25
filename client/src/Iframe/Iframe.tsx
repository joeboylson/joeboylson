import React from 'react';

export interface IframeProps {
  projectUrl: string;
  index?: number;
}

const Iframe: React.FC<IframeProps> = (Props) => {
  return (
    <div>
      <iframe src={Props.projectUrl} title={Props.projectUrl}/>
    </div>
  );
}

export default Iframe;
