import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routers from './components/Routers';
import NavigationBarMobile from './components/NavigationBarMobil';

/**
 * @description - We call our Router component and Navigation component here.
 * 
 */
function App() {
  return (
    <div>
      <Routers />
      <NavigationBarMobile />
    </div>
  );
}

export default App;