import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Screens/HomeScreen';
/* import Login from './Screens/Login'; */
import Search from './Screens/SearchScreen';
import Register from './Screens/Registration';
import InspirationScreen from './Screens/InspirationScreen';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/search" component={Search} />
    <Route path="/inspiration" component={InspirationScreen} />
  </Switch>
)

export default Routers;