import React, { Component } from 'react'

/**
 * @desc - this HOC handles all API requests from Spoonacular.
 */
export default function withApiRequests(WrappedComponent) {
  return class extends Component {
    BASE_URL = "https://api.spoonacular.com/recipes/";

    apiKey = '&apiKey=4da713dcb3264dadabdd2320753598fd'; //Katalina
    apiKey2 = '&apiKey=7e966aa4956a4e908dcc1e6276c1af38'; //Antes
    apiKey3 = '&apiKey=177107bbb0684795849147b2a3772e18'; // Karwan
    
    fetchRandomImages = () => {
      return fetch(this.BASE_URL + 'random?number=10' + this.apiKey)
      .then(response => {
        return response.json();
      }) 
    }

    fetchIngredientById = (id) => {
      return fetch(this.BASE_URL + id + '/information?includeNutrition=false' + this.apiKey)
      .then(response => {
        return response.json();
      })
    }

    fetchImagesByTag = () => {
      return fetch(this.BASE_URL + 'random?number=10&tags=vegetarian' + this.apiKey)
      .then(response => {
        return response.json();
      })
    }

    fetchSearchRequest = (searchValue) => {
      return fetch(this.BASE_URL + 'search?query=' + searchValue + this.apiKey)
      .then(response => {
        return response.json();
      })
    }
     
    render() {
      return (
        <WrappedComponent 
          getRandom={this.fetchRandomImages} 
          getTag={this.fetchImagesByTag}
          getSearch={this.fetchSearchRequest}
          getIngredient={this.fetchIngredientById}
          {...this.props}
        />
      )
    }
  }
}
