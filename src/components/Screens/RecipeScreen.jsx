import React, { Component } from 'react'
import { compose } from 'redux';

import withApiRequests from '../HOCS/withApiRequests';
import withStyles from '../HOCS/withStyles';

/**
 * @description - Recipe screen, here we use the history object to get our specific recipe and its properties
 * We then map the object to get the properties we need and also map when creating (rendering)
 * them. (to show the information one at a time, otherwise we get a block of text wich is not ideal.)
 * The screen contains - A header image of the recipe chosen by the user.
 * Ingredient list + Guide on how to cook/bake the recipe and also a Clock Icon to show the time it takes.
 * @author - Karwan Gulnezer
 */

class RecipeScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipe: this.props.location.state,
      recipeSteps: [],
      ingredients: [],
    }
  }

  componentDidMount(){
    this.setInstructions();
    this.setIngredients();
  }

  setInstructions = () => {
    const steps = this.state.recipe.analyzedInstructions[0].steps;
    this.setState({recipeSteps: steps.map((items) =>{
      return items.step;
    })})        
  }

  setIngredients = () => {
    const apiIngredients = this.state.recipe.extendedIngredients;
    this.setState({ingredients: apiIngredients.map((items) =>{
      return items.original;
    })})        
  }

  createIngredients = () => {
    const ingredients = this.state.ingredients;
    const classes  = this.props.classes;
    
    const renderIngredients = ingredients.map((item, i) => {
      return (
        <li className={classes.ingredientsListItem} key={i}>
          <span className={classes.stepsListItem}>
            {item} 
          </span>
        </li>
    )})   
    return renderIngredients;
  }

  createSteps = () => {
    const theSteps = this.state.recipeSteps;
    const classes  = this.props.classes;
      
    const renderSteps = theSteps.map((step, i) => {
      return (
        <li className={classes.listItemMargin} key={i}>
          <span className={classes.stepsListItem}>
            {step} 
          </span>
        </li>
      )
    })
    return renderSteps;
  }

  render() {
    const recipe = this.state.recipe;
    const classes  = this.props.classes;

    return (
      <div>
        <img 
          className={classes.recipeImg}
          src={recipe.image}
          alt="food"
        />
        <p className={classes.recipeTitle}>{recipe.title}</p>

        <div className={classes.recipeHeaders}>
          <i style={{fontSize: '1.8em', position: 'absolute', marginLeft: '80%'}}
            className="fa fa-clock-o"
          />
          <p className={classes.recipeHeadPara}>
            {recipe.readyInMinutes}:MIN
          </p>
          <h3 className={classes.headerTitles}>Ingredients</h3>
        </div>
        <div>
          <ul>
            {this.createIngredients()}
          </ul>
        </div>

        <div className={classes.recipeHeaders}>
          <h3 className={classes.headerTitles}>What to do</h3>
        </div>

        <div className={classes.stepListDiv}>
          <ol className={classes.stepList}>
            {this.createSteps()}
          </ol>
        </div>
      </div>
    )
  }
}

export default compose(
  withApiRequests,
  withStyles
)(RecipeScreen)
