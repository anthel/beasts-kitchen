import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '@material-ui/core';

import styles from '../components/StyleModulesCss/Carousel.module.css';
import Weekly from './WeeklyTips';

/**
 * @desc - Carousel is imported from the React Bootstrap library. 
 * This class represents the Home Page, it renders the main Carousel
 * with three different pictures and titles. 
 * 
 * Has two titles for the page, 'Weekly Tips' and 'Inspiration'.
 * Under each title, it renders the Weekly Component that has the Weekly 
 * Tips images and slideshow with titles.
 * 
 * Includes one button from Material UI, if the user wants to get more 
 * inspired and see more recipes (FUNCTIONALITY for this, not done!).
 */
class HomePage extends Component {
  showMore = () => {
    console.log('inspired');
  }

  render() {
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
            <h2 className={styles.homePageTitle}>Sallads</h2>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i2.wp.com/theculinarycook.com/wp-content/uploads/2019/05/types-of-salad-cobb.jpg?fit=900%2C600&ssl=1"
              alt="Second slide"
            />

          <Carousel.Caption>
            <h2 className={styles.homePageTitle}>Healthy</h2>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myfoodandfamily.com/adaptivemedia/rendition/100652646_1500x1000.jpg?id=b063d22121a66f988b7a81ab9a1ac3d026d5c012&ht=650&wd=1004"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className={styles.homePageTitle}>Bake</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <div className={styles.weeklyTips}>
          <h2 className={styles.weeklyTipsTitle}>Weekly Tips</h2>
        </div>
        <Weekly />

        <div className={styles.weeklyTips}>
          <h3 className={styles.weeklyTipsTitle}>Inspiration</h3>
        </div>
        <div>
          <Weekly />
          
          <Button 
            style={{
              backgroundColor: '#84C984',
              color: '#ffffff',
              margin: '10px',
              padding: '5px',
              borderRadius: '5px',
              border: '2px solid rgb(100, 153, 100)',
              fontSize: '12px',
              textTransform: 'lowercase',
            }}
            onClick={this.showMore}
            size="small" 
            >Show more!</Button>
        </div>
      </Fragment>
    )
  }
} 

export default HomePage;

