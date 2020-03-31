import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Search from './Screens/Search';

const Routers = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
        </Switch>
)

export default Routers;