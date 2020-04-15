import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Card, CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import withStyles from '../HOCS/withStyles';
/**
 * @desc - this component represents the Home Page Screen.
 * It renders the Home Page Component.
 */
class SavedRecipesScreen extends Component {
	logOut = () => {
		return this.props.history.push('/login');
	}

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					className={classes.logOutBtn}
					onClick={this.logOut}
				>
					Log out
				</Button>
        <div className={classes.inspirationContainer}>
          <h3>Saved Recipes!</h3>
        </div>

        <div>
          <Card className={classes.cardImage}>
            <CardActionArea>
              <img 
              className={classes.savedRecipes}
              src="https://be35832fa5168a30acd6-5c7e0f2623ae37b4a933167fe83d71b5.ssl.cf3.rackcdn.com/5418/chorizo-jambalaya__square.jpg"
              alt="food"
              />
            </CardActionArea>
          </Card>

          <p className={classes.savedRecipesTitles}><FavoriteIcon/> Food title</p>
        </div>
        <div className={classes.savedRecipesDiv}>
          <Card className={classes.cardImage}>
            <CardActionArea>
              <img 
              className={classes.savedRecipes}
              src=" https://pinchofyum.com/wp-content/uploads/Honey-Ginger-Tofu-Veggie-Stir-Fry-Square.jpg"
              alt="food"
              />
            </CardActionArea>
          </Card>
          <p 
            className={classes.savedRecipesTitles}>
            <FavoriteIcon className={classes.heartIcon}/> Food title
          </p>
        </div>
        <div>
          <Card className={classes.cardImage}>
            <CardActionArea>
              <img 
              className={classes.savedRecipes}
              src="https://173qcb30csdp49kz9m14gsrd-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/pork-stir-fry-one-dish-kitchen-social.jpg"
              alt="food"
              />
            </CardActionArea>
          </Card>
          <p className={classes.savedRecipesTitles}><FavoriteIcon/> Food title</p>
        </div>
        <div className={classes.savedRecipesDiv}>
          <Card className={classes.cardImage}>
            <CardActionArea>
              <img 
              className={classes.savedRecipes}
              src="https://pinchofyum.com/wp-content/uploads/5-Ingredient-Lemon-Chicken-Recipe.jpg"
              alt="food"
              />
            </CardActionArea>
          </Card>
          <p className={classes.savedRecipesTitles}><FavoriteIcon/> Food title</p>
        </div>
			</Fragment>
		)
	}
}

export default withStyles(SavedRecipesScreen);