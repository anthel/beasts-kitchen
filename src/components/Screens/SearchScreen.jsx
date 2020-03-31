import React, { useState } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';

// TODO: Add comments 

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
  divider: {
    height: 45,
    margin: 4,
  },
  chipOne: {
    backgroundColor: 'rgba(79, 183, 0, 0.65)',
    color: 'white',
    margin: 5,
  },
  chipTwo: {
    backgroundColor: 'rgba(108, 192, 24, 0.63)',
    color: 'white',
    margin: 5,
  },
  chipThree: {
    backgroundColor: 'rgba(11, 145, 1, 0.68)',
    color: 'white',
    margin: 5,
  },
  chipFour: {
    backgroundColor: 'rgba(74, 145, 20, 0.685)',
    color: 'white',
    margin: 5,
  },
  chipSection: {
    margin: 5,
  }
}));

export default function SearchScreen() {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  

  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
      
        </IconButton>
        <SearchIcon />
        <InputBase
          className={classes.input}
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            console.log(event.target.value);
          }}
        />
        <IconButton type="submit" className={classes.iconButton} onClick={sendSearchRequest(inputValue)} aria-label="search">
          
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          
        </IconButton>
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
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipOne} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipTwo} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipThree} clickable />
        <Chip label="Clickable Link" component="a" href="#chip" className={classes.chipFour} clickable />
      </div>
    </React.Fragment>
  );
}

function sendSearchRequest(inputValue) {

  const apiKey = 'apiKey=7e966aa4956a4e908dcc1e6276c1af38&';

  const searchQuery = 'query=' + inputValue;

  fetch('https://api.spoonacular.com/recipes/search?' + apiKey + searchQuery)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
}