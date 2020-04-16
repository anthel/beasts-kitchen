import React, { Component, Fragment } from 'react';

import HomePage from '../HomePage';
import FooterContent from '../FooterContent';

/**
 * @desc - this component represents the Home Page Screen.
 * It renders the Home Page Component.
 */
class HomeScreen extends Component {
	render() {
		return (
		<Fragment>
			<HomePage />
			<FooterContent/>
		</Fragment>
		)
	}
}

export default HomeScreen;