import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Screens/HomeScreen';
import Search from './Screens/SearchScreen';
import Register from './Screens/Registration';
import InspirationScreen from './Screens/InspirationScreen';
import Login from './Login';
import SavedRecipes from './Screens/SavedRecipesScreen';


const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/search" component={Search} />
    <Route path="/inspiration" component={InspirationScreen} />
    <Route path="/login" component={Login} />
    <Route path="/savedrecipes" component={SavedRecipes}/>
  </Switch>
)

export default Routers;