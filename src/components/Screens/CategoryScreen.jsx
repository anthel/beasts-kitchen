import React, { Component, Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Card, CardActionArea } from '@material-ui/core';

import withStyles from '../HOCS/withStyles';

/**
 * @description - The Category Screen where we loop 30 times to create
 * 30 cards with the image of the food category.
 * Example: If the user choses Pasta as a category -  30 pasta recipes will show up
 * @author - Karwan Gulnezer
 */

class CategoryScreen extends Component {
  createCard = () => {  
    let cardsList = []
    const { classes } = this.props;
  
    // Outer loop to create parent
    for (let i = 0; i < 30; i++) {
    //Create the parent and add the listOfChildren
      cardsList.push(        
        <Card className={classes.CategoryCard} key={i}>
          <CardActionArea>
            <img className={classes.CategoryImg}
              src="https://www.uppsnappat.nu/wp-content/uploads/ugly-smile.jpg"
              alt="food"
            />
            <div className={classes.CategoryOverlay}>
              <p>Creamy Tooth ala vodka</p>
            </div>
          </CardActionArea>
        </Card>
      )
    }    
    return cardsList
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/raw-pasta-wooden-spoons_23-2148360819.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Pastas</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-feat.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Creamy</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static01.nyt.com/images/2018/11/30/dining/jm-crusty-mac-and-cheese/jm-crusty-mac-and-cheese-articleLarge.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Cheesy</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.foodiewithfamily.com/wp-content/uploads/2020/01/meatball-pasta-bake-4.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Or Baked!</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <div className={classes.cardsContainer}>
         {this.createCard()}
        </div>
      </Fragment>
    )
  }
}

export default compose(
  withRouter,
  withStyles
)(CategoryScreen);
