import React, { Component } from 'react'
import withStyles from '../HOCS/withStyles';
import { compose } from 'redux';
import withApiRequests from '../HOCS/withApiRequests';

class RecipeScreen extends Component {
    constructor(props){
        super(props);
        const api = this.props;

        this.state = {
            recipe: this.props.location.state,
            recipeSteps: [],
        }
    }

    componentDidMount(){
        this.setSteps();
    }

    setSteps = () => {
        const steps = this.state.recipe.analyzedInstructions[0].steps;
        console.log(steps);
        
         this.setState({recipeSteps: steps.map((items) =>{
             console.log(items);
             
             return items.step;
        })})        
    }

    createSteps = () => {
         const theSteps = this.state.recipeSteps;
        
        for (let i = 0; i < theSteps.length; i++) {
            return (
                <div style={{marginBottom: 400}}>
                     <ol>
                         <li>
                            {theSteps[i]} 
                         </li>
                     </ol>
                </div>
            )
        }       
    }

    render() {
        const recipe = this.state.recipe;
        const classes  = this.props.classes;

        return (

            <div>
                <img className={classes.recipeImg}
                    src={recipe.image}
                    alt="b"
                />
                <p className={classes.recipeTitle}>{recipe.title}</p>

                <div className={classes.recipeHeaders}>
                    <i style={{fontSize: '1.8em', position: 'absolute', marginLeft: '80%'}}
                     className="fa fa-clock-o"
                     />
                     <p className={classes.recipeHeadPara}>
                         {recipe.readyInMinutes}:MIN
                    </p>
                    <h3>Ingredients</h3>
                </div>
                <div>
                    <p>ingredient list</p>
                </div>

                <div className={classes.recipeHeaders}>
                    <h3>What to do</h3>
                </div>

                <div>
                    {this.createSteps()}
                </div>
            </div>
        )
    }
}

export default compose(
  withApiRequests,
  withStyles
)(RecipeScreen)
