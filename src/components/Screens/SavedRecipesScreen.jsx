import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Card, CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setLoggedUser} from '../Redux/actions';
import withStyles from '../HOCS/withStyles';

/**
 * @desc - this class represents the Saved Recipes Screen.
 * It includes a log out button that sets the loggedUser in 
 * Redux to false and re-directs the user to the Login Screen. 
 * Renders cards with images and food titles, mocked data that
 * represents recipes that would have been saved by the user. 
 * @author - Katalina
 */
class SavedRecipesScreen extends Component {
	logOut = () => {
    this.props.setLoggedIn(false);
    this.props.history.push("/login");
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
          <p className={classes.savedRecipesTitles}><FavoriteIcon/> Food title</p>
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

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.root.loggeduser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setLoggedIn: (isLoggedIn) => dispatch(setLoggedUser(isLoggedIn)),
})

export default compose(
  withStyles,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SavedRecipesScreen);