import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routers from './components/Routers';
import NavigationBarMobile from './components/NavigationBarMobil';

/**
 * @description - Layout for the navigation (for both mobile and webpage)
 * Links are the "buttons" on the page, "Drawer" is the hamburger navigation.
 * Content is where you call your other components for the application
 */
function App() {
  return (
    <div className="demo-big-content">
      <Routers />
      <NavigationBarMobile />
    </div>
  );
}

export default App;