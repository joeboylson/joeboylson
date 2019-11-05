import * as React from 'react';

export const Router = React.createContext({})

const AppProvider: React.FC = (Props) => {

  const [route, setRoute] = React.useState('');

  const context = {
    route: route,
    setRoute: setRoute,
  }
  
  return (
    <Router.Provider value={context}>
      {Props.children}
    </Router.Provider>
  )
}

export default AppProvider;