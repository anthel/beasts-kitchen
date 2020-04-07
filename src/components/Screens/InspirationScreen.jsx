import React, { Component } from 'react'
import withStyles from '../HOCS/withStyles'
import { Card, CardActionArea } from '@material-ui/core';

 class InspirationScreen extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      apiImages: [],
      apiFoodTitle: '',
    }
  }

  componentDidMount(){
    this.fetchRandomImages();    
  }

  clickOnImg = () => {
    console.log('To recipe Screen!');
  }

  createCard = () => {  
    
    let cardsList = []
    const { classes } = this.props;
  
    // Outer loop to create parent
    for (let i = 0; i < 10; i++) {
    //Create the parent and add the listOfChildren
      cardsList.push(        
        <Card className={classes.inspirationContent} key={i}>
          <CardActionArea onClick={this.clickOnImg}>
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

  fetchRandomImages = () => {
    
    const apikey = '&apiKey=4da713dcb3264dadabdd2320753598fd';

    fetch('https://api.spoonacular.com/recipes/random?number=10' + apikey)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
       
        this.setState({apiImages: data.recipes.map((items) =>{
          console.log(items);
          return items.image;
        })})

        this.setState({apiFoodTitle: data.recipes.map((items) =>{
          console.log(items);
          return items.title;
        })})
    })
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

export default withStyles(InspirationScreen);