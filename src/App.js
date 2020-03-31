import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import HomePage from './components/HomePage';
import HomeScreen from './components/Screens/HomeScreen';

function App() {
  return (
    <Fragment>
      {/* <HomePage /> */}
      <HomeScreen />
    </Fragment>
  );
}

export default App;
