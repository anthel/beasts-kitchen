import React, { Component } from 'react'
import withStyles from '../HOCS/withStyles'
import { Card, CardActionArea } from '@material-ui/core';

 class InspirationScreen extends Component {
  constructor(props){
    super(props);
  }

  createCard = () => {    
    let card = []
    const { classes } = this.props;
  
    // Outer loop to create parent
    for (let i = 0; i < 40; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 1; j++) {
        children.push(
            <Card>
                {<CardActionArea>
                  <img className={classes.media}
                    src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
                    alt="food"
                  />
                  <div className={classes.overlay}>
                    <h3>text</h3>
                  </div>
                  </CardActionArea>
                }
            </Card>)
      }
      //Create the parent and add the children
      card.push(<Card>{children}</Card>)
    }
    return card
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.inspirationContainer}>
        <Card className={classes.root}>
          {this.createCard()}
        </Card>
      </div>
    )
  }
}

export default withStyles(InspirationScreen);


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import withStyles from '../HOCS/withStyles';

// class InspirationScreen extends Component {

//   function createCard(){    
//     let card = []

//     // Outer loop to create parent
//     for (let i = 0; i < 40; i++) {
//       let children = []
//       //Inner loop to create children
//       for (let j = 0; j < 1; j++) {
//         children.push(
//             <Card>
//                 {<CardActionArea>
//                   <img style={{width: '100%', position: 'relative', height: 200}}
//                     src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
//                     alt="food"
//                   />
//                   <h3>text</h3>
//                   </CardActionArea>
//                 }
//             </Card>)
//       }
//       //Create the parent and add the children
//       card.push(<Card>{children}</Card>)
//     }
//     return card
//   }

//   render(){
//     return(
//       <h1>inspi</h1>
//     )
//   }
// }


  
// function InspirationScreen(props) {    
//   const { classes } = props;
  
//   return (
//     <div className={classes.inspirationContainer}>
//         <Card className={classes.root}>
//                 {createCard()}
//         </Card>
//     </div>
//   );
// }

// export default withStyles(InspirationScreen);


// <div className={classes.inspirationContainer}>
    //     <h3>Inspiration</h3>
    //     <hr className={classes.lineStyle}/>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190313-creamy-lemon-parmesan-chicken-horizontal-1553026901.png?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    //     <Card className={classes.root}>
    //         <CardActionArea>
    //             <img className={classes.media}
    //                 src="https://static.mathem.se/shared/images/recipes/doublelarge/kottfarsbollar-i-tomatsas-med-pasta-foto-nurlan-emir-mathem-1.jpeg"
    //                 alt="food"
    //             />
    //             <div className={classes.overlay}>
    //                 <h3>Title</h3>
    //             </div>
    //         </CardActionArea>
    //     </Card>
    // </div>