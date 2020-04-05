import React, { Component, Fragment } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import withStyles from './HOCS/withStyles';

/**
 * @desc - this component uses the Carousel from the npm package
 * 'react-multi-carousel'. Makes it responsive for desktop, tablet
 * and mobile screens. Includes each picture that the carousel has
 * and a title. 
 */
class Weekly extends Component {
	// constructor(props) {
	// 	super(props);
	// }

  render() {
		const { classes } = this.props;

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
					<div>
						<img 
						src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
						alt="beat"
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 1</h6>
					</div>

					<div>
						<img src="https://mittkok.expressen.se/wp-content/uploads/2013/05/mittkok-rotfrukter-fotoehall_mg_2619-700x700.jpg"
						alt="blaba"
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 2</h6>
					</div>

					<div>
						<img src="https://thebusybaker.ca/wp-content/uploads/2018/09/one-pot-chicken-dinner-fb-ig1.jpg"
						alt="blabla"
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 3</h6>
					</div>

					<div>
						<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-tuna-recipes-1585323975.png?crop=0.795xw:0.793xh;0.0912xw,0.115xh&resize=640:*"
						alt="hhe" 
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 4</h6>
					</div>

					<div>
						<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
						alt="hhe" 
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 5</h6>
					</div>

					<div>
						<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*"
						alt="hhe" 
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 6</h6>
					</div>

					<div>
						<img src="https://recipes.timesofindia.com/photo/53096628.cms"
						alt="hhe" 
						className={classes.weeklyImg}/>
						<h6 className={classes.weeklyTitle}>Title 7</h6>
					</div>
        </Carousel>
      </Fragment>
    )
  }
}

export default withStyles(Weekly);
