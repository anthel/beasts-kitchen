import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Search from './screens/Search';

const Routers = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
        </Switch>
)

export default Routers;