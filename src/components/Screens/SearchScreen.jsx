import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import withStyles from '../HOCS/withStyles';
import withApiRequests from '../HOCS/withApiRequests';
import { compose } from 'redux';


function SearchScreen(props) {

  const [inputValue, setInputValue] = useState('');

  const { classes } = props;

  return (
    <React.Fragment>
      <Paper component="form" className={classes.searchForm}>
       
        <SearchIcon fontSize="large"/>

        {/* Input field, search */}
        <InputBase
          className={classes.searchInput}
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        {/* Invisible submit button, search by pressing enter/ok */}
        <IconButton type="submit" 
          
          onClick={(event)=>{
            props.getSearch(inputValue)
            .then(response => console.log(response))
            event.preventDefault();
          }} 
        />
      </Paper>

      <div className={classes.chipSection}>

        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipOne} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipTwo} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipThree} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipFour} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipOne} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipTwo} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipThree} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipFour} clickable />
    
      </div>
    </React.Fragment>
  );
}

export default compose(
  withStyles,
  withApiRequests
)(SearchScreen)
