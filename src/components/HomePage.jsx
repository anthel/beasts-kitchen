import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import RandomCarousel from './RandomCarousel';
import Weekly from './WeeklyTips';
import withStyles from './HOCS/withStyles';

/**
 * @desc - Carousel is imported from the React Bootstrap library. 
 * This class represents the Home Page, it renders the main Carousel
 * with three different pictures and titles. 
 * 
 * Has two titles for the page, 'Go Vego' and 'Inspiration'.
 * Under each title, it renders the Weekly Component that has the Weekly 
 * Tips images and slideshow with titles from API.
 * 
 * Includes one button from Material UI, the button re-directs the user
 * to the Inspiration Screen with more recipes from the API. 
 * @author - Katalina
 */
class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.sunbasket.com/51aff5d6-80bf-421e-8e24-68c54941ab76.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Sallads</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i2.wp.com/theculinarycook.com/wp-content/uploads/2019/05/types-of-salad-cobb.jpg?fit=900%2C600&ssl=1"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Healthy</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myfoodandfamily.com/adaptivemedia/rendition/100652646_1500x1000.jpg?id=b063d22121a66f988b7a81ab9a1ac3d026d5c012&ht=650&wd=1004"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className={classes.homePageTitle}>Bake</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <div className={classes.weeklyTips}>
          <h2 className={classes.weeklyTipsTitle}>Go Vego!</h2>
        </div>
        <Weekly history={this.props.history}/>

        <div className={classes.weeklyTips}>
          <h3 className={classes.weeklyTipsTitle}>Inspiration</h3>
        </div>
        <div>
        <RandomCarousel history={this.props.history}/>  
        <button className={classes.showMoreBtn}>
          <Link to="/inspiration" className={classes.btnLink}>
            Get more inspiration! »
          </Link>
        </button>
        </div>
      </Fragment>
    )
  }
} 

export default compose(
  withRouter,
  withStyles
)(HomePage);

