import React, { Component } from 'react'
import withStyles from '../HOCS/withStyles'
import { Card, CardActionArea } from '@material-ui/core';
import withApiRequests from '../HOCS/withApiRequests';
import { compose } from 'redux';


 class InspirationScreen extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      apiObj: [],
      apiID: [],
      apiImages: [],
      apiFoodTitle: '',
    }
  }

  componentDidMount(){
    this.getImages();
  }

  getImages = () => {
    this.props.getRandom()
    .then(data => {
      console.log(data);
     
      this.setState({apiImages: data.recipes.map((items) =>{
        return items.image;
      })})

      this.setState({apiFoodTitle: data.recipes.map((items) =>{
        console.log(items);
        
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

  createCard = () => {  
    
    let cardsList = []
    const { classes } = this.props;
  
    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
    //Create the parent and add the listOfChildren
      cardsList.push(        
        <Card className={classes.inspirationContent} key={i}>
          <CardActionArea onClick={()=>{
            this.props.history.push('/recipescreen/'+ this.state.apiID[i], this.state.apiObj[i])
            }}>
            <img className={classes.media}
              src={this.state.apiImages[i]}
              alt="food"
            />
            <div className={classes.overlay}>
              <p>{this.state.apiFoodTitle[i]}</p>
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
      
      <div className={classes.inspirationContainer}>
        <h3>Get Inspired!</h3>
        <hr className={classes.lineStyle}/>
          {this.createCard()}
      </div>
    )
  }
}

export default compose(
  withApiRequests,
  withStyles
)(InspirationScreen)
