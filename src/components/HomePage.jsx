import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styles from '../components/StyleModulesCss/Carousel.module.css';

class HomePage extends Component {
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
            <h3 className={styles.homePageTitle}>Sallads</h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i2.wp.com/theculinarycook.com/wp-content/uploads/2019/05/types-of-salad-cobb.jpg?fit=900%2C600&ssl=1"
              alt="Second slide"
            />

          <Carousel.Caption>
            <h3 className={styles.homePageMiddleTitle}>Healthy</h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.myfoodandfamily.com/adaptivemedia/rendition/100652646_1500x1000.jpg?id=b063d22121a66f988b7a81ab9a1ac3d026d5c012&ht=650&wd=1004"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className={styles.homePageMiddleTitle}>Bake</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className={styles.weeklyTips}>
          <h2 className={styles.weeklyTipsTitle}>Weekly Tips</h2>
        </div>
      </Fragment>
    )
  }
} 

export default HomePage;


