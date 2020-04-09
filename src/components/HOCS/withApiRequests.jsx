import React, { Component } from 'react'


export default function withApiRequests(WrappedComponent) {

  return class extends Component {

    BASE_URL = "https://api.spoonacular.com/recipes/";

    apikey = '&apiKey=4da713dcb3264dadabdd2320753598fd';

    apiKey2 = '&apiKey=7e966aa4956a4e908dcc1e6276c1af38'; //Antes
    
    fetchRandomImages = () => {
    
      return fetch(this.BASE_URL + 'random?number=10' + this.apikey)
        .then(response => {
          console.log(response)
          return response.json();
        })

    }

    fetchSearchRequest = (searchValue) => {

      return fetch(this.BASE_URL + 'search?query=' + searchValue + this.apiKey2)
      .then(response => {
        console.log(response)
        return response.json();
      })
    }
     
    
    render() {
      
      return (
        <WrappedComponent 
          getRandom={this.fetchRandomImages}
          getSearch={this.fetchSearchRequest}
          {...this.props}
          />
      )
    }
  }
}
