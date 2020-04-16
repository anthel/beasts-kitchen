import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import withStyles from '../HOCS/withStyles';
import withApiRequests from '../HOCS/withApiRequests';
import { compose } from 'redux';
import { Card, CardActionArea } from '@material-ui/core';



function SearchScreen(props) {

  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  

  const { classes } = props;

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
        <IconButton type="submit" 
          
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
        <Chip label="Vegan Dogshit" component="a" href="/category" className={classes.chipThree} clickable />
        <Chip label="Vegitarian" component="a" href="/category" className={classes.chipFour} clickable />
        <Chip label="Taco Taco Taco" component="a" href="/category" className={classes.chipFour} clickable />

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
    
   
    props.getIngredient(item.id)
      .then(response => {
        
      })
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


export default compose(
  withStyles,
  withApiRequests
)(SearchScreen)

