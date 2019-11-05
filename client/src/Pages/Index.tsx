import React from 'react';
import './Pages.css'

import { Router } from '../Router/Router';
import Polygon from '../SVG/Polygon'

const Index: React.FC = () => {

  const context: any = React.useContext(Router)
  // const route = context['route']
  const setRoute = context['setRoute']

  return (
      <div id={'index'} onClick={() => setRoute('about')}>

        <div id={'polygon-wrapper'}>
          <Polygon size={'calc(100% - (89px * 2))'} fill={'white'}/>
        </div>
        
      </div>
  );
}

export default Index;