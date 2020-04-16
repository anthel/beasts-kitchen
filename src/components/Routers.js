import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from './Screens/HomeScreen';
import Register from './Screens/Registration';
import Search from './Screens/SearchScreen';
import InspirationScreen from './Screens/InspirationScreen';
import Login from './Screens/Login';
import SavedRecipes from './Screens/SavedRecipesScreen';
import CategoryScreen from './Screens/CategoryScreen';
import RecipeScreen from './Screens/RecipeScreen';


/**
 * @desc - the Switch looks through its children <Route>s and
 * renders the first one that matches the current URL and 
 * associated component. 
*/
const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/search" component={Search} />
    <Route path="/inspiration" component={InspirationScreen} />
    <Route path="/login" component={Login} />
    <Route path="/savedrecipes" component={SavedRecipes}/>
    <Route path="/category" component={CategoryScreen}/>
    <Route path="/recipescreen/:id" component={RecipeScreen} />
  </Switch>
)

export default Routers;