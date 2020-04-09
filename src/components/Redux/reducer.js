import { combineReducers } from 'redux'

const initialState = {
  user: null,
  users: null,
  currentuser: null,
}

/*
* Creating a reducer and naming it root
* @Params
*   state which has a default state
*   action which is the action object
*
*   returns a new state depending on the action type and payload
*/
const root = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      }
    case 'SET_JSON':
      return {
        ...state,
        users: action.payload
      }
    case 'SET_CURRENTUSER':
      return {
        ...state,
        currentuser: action.payload
      }
      default:
      return state
  }
}

export default combineReducers({
  root,
  // Here you can add more reducers
})

