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
    console.log(searchResults)
   
    
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
            .then(response => setSearchResults(response))
            
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

      <div>
       
        {searchResults && showResults(searchResults)}
      </div>
    </React.Fragment>
  );
}

function showResults(res) {

  
  
  return res.results.map((item, i) => {
    console.log(item.image);
    
    return (
      <Card key={i}>
        <CardActionArea>
        <img 
        width={200}
        src={item.image} alt="item"/>
        <p>{item.title}</p>
        </CardActionArea>
      </Card>
    );
  })
}


export default compose(
  withStyles,
  withApiRequests
)(SearchScreen)

