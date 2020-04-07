import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';


  // Root styling used for the form which contains input field
  root: {
    padding: '2px 4px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: 8,
  },

  const [inputValue, setInputValue] = useState('');

  

  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
       
        <SearchIcon fontSize="large"/>

        {/* Input field, search */}
        <InputBase
          className={classes.input}
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        {/* Invisible submit button, search by pressing enter/ok */}
        <IconButton type="submit" 
          className={classes.iconButton} 
          onClick={(event)=>{sendSearchRequest(event,inputValue)}} 
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

function sendSearchRequest(event, inputValue) {


  const apiKey = 'apiKey=7e966aa4956a4e908dcc1e6276c1af38&';

  const searchQuery = 'query=' + inputValue;

  fetch('https://api.spoonacular.com/recipes/search?' + apiKey + searchQuery)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })

    event.preventDefault();
}