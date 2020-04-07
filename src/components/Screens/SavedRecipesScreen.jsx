import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';

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
				<h1>Saved Recipes!</h1>
			</Fragment>
		)
	}
}

export default withStyles(SavedRecipesScreen);