import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { Card, CardActionArea } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

import withApiRequests from '../HOCS/withApiRequests';
import withStyles from '../HOCS/withStyles';

/**
 * @desc Screen component responsible for rendering the search screen, with functionality to take an input and use it to make an API
 * request, and render the results on the screen.
 * @param {*} props Takes styling and api calls from HOCS as props
 * @author Ante Hellgren
 */
function SearchScreen(props) {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const { classes } = props;

  /**
   * @desc Hook responsible for updating the component when the search request has returned the results, 
   * so that the results are shown on screen without having to update the page.
   */
  useEffect(() => { 
  }, [searchResults])
  
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
        <IconButton 
          type="submit" 
          onClick={(event)=>{
            props.getSearch(inputValue)
            .then(response => {
              setSearchResults(response)
            })
            event.preventDefault();
          }} 
        />
      </Paper>

      <div className={classes.chipSection}>
        <Chip label="Meat" component="a" href="/category" className={classes.chipOne} clickable />
        <Chip label="Lactos Free" component="a" href="/category" className={classes.chipTwo} clickable />
        <Chip label="Gluten Free" component="a" href="/category" className={classes.chipThree} clickable />
        <Chip label="Fish" component="a" href="/category" className={classes.chipFour} clickable />
        <Chip label="Friuts & Veggies" component="a" href="/category" className={classes.chipOne} clickable />
        <Chip label="Desserts" component="a" href="/category" className={classes.chipTwo} clickable />
        <Chip label="Vegan" component="a" href="/category" className={classes.chipThree} clickable />
        <Chip label="Vegitarian" component="a" href="/category" className={classes.chipFour} clickable />
        <Chip label="Taco" component="a" href="/category" className={classes.chipFour} clickable />
      </div>
      <hr className={classes.lineStyling} />
      <div>
        {searchResults && showResults(searchResults, props)}
      </div>
    </React.Fragment>
  );
}

function showResults(res, props) {
  const { classes } = props;
  const BASE = "https://spoonacular.com/recipeImages/";

  return res.results.map((item, i) => {
    return (
      <Card key={i}>
        <CardActionArea className={classes.SearchCardContainer}>
          <img 
            className={classes.SearchImage}
            src={BASE +item.image} alt="item"
          />
          <p className={classes.SearchTitle}>{item.title}</p>
        </CardActionArea>
      </Card>
    );
  })
}

SearchScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  getSearch: PropTypes.func.isRequired,
};

export default compose(
  withStyles,
  withApiRequests
)(SearchScreen)

