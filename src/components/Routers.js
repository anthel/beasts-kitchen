import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Screens/HomeScreen';
import Login from './Screens/Login';
import Search from './Screens/SearchScreen';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Login} />
    <Route path="/search" component={Search} />
  </Switch>
)

export default Routers;