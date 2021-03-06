import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Link } from 'react-router-dom';

import withStyles from './HOCS/withStyles';

/**
 * @description - Navigation bar at the bottom of the page on every screen.
 * Icons and components are importet from Material UI.
 * BottomNavigationAction expects a component that is a Link wich we import from react-router-dom 
 * + a path for that link. This way we can navigation between screens. 
 * @author - Karwan Gulnezer
 */

function NavigationBarMobile(props) {
  const { classes } = props;
  
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.navBar} >
      <BottomNavigationAction component={Link} to="/" label="Home Page" value="home" icon={<HomeRoundedIcon />} />
      <BottomNavigationAction component={Link} to="/login" label="My Page" value="MyPage" icon={<AccountBoxRoundedIcon />} />
      <BottomNavigationAction component={Link} to="/search" label="Search Recipe" value="Search" icon={<SearchRoundedIcon />} />
    </BottomNavigation>
  );
}

export default withStyles(NavigationBarMobile);