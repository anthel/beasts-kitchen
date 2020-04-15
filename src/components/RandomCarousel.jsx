import React, { Component, Fragment } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardActionArea } from '@material-ui/core';

import withStyles from './HOCS/withStyles';
import { compose } from 'redux';
import withApiRequests from './HOCS/withApiRequests';

/**
 * @desc - this component uses the Carousel from the npm package
 * 'react-multi-carousel'. Makes it responsive for desktop, tablet
 * and mobile screens. Includes each picture that the carousel has
 * and a title. 
 */
class RandomCarousel extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      apiImages: [],
      apiFoodTitle: '',
      apiObj: [],
      apiID: [],
    }
  }

  componentDidMount(){
    this.getImages();
  }

  getImages = () => {
    this.props.getRandom()
    .then(data => {
    
      this.setState({apiImages: data.recipes.map((items) =>{
        return items.image;
      })})

      this.setState({apiFoodTitle: data.recipes.map((items) =>{
        return items.title;
    })})

    this.setState({apiID: data.recipes.map((items) =>{
      return items.id;
    })})

    this.setState({apiObj: data.recipes.map((items) =>{
      return items;
    })})
   })
  }


  createImgCarousel = () => {  

    let imgList = []
    const { classes } = this.props;

    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
    //Create the parent and add the listOfChildren

      imgList.push(  
          <CardActionArea key={i} onClick={()=>{
            this.props.history.push('/recipescreen/'+ this.state.apiID[i], this.state.apiObj[i])
            }}>
            <img 
            src={this.state.apiImages[i]}
            alt="beat"
            className={classes.weeklyImg}/>
            <h6 className={classes.weeklyTitle}>{this.state.apiFoodTitle[i]}</h6>  
          </CardActionArea>
        )
    }    
    return imgList;
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 40
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        partialVisibilityGutter: 30
      },
    };

    return(
      <Fragment>
        <Carousel responsive={responsive}
          arrows={false}
          partialVisible={true}
        >
          {this.createImgCarousel()}
			
        </Carousel>
      </Fragment>
    )
  }
}

export default compose(
  withStyles,
  withApiRequests
)(RandomCarousel);
