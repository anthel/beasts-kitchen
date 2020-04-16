import { combineReducers } from 'redux'

const initialState = {
  loggeduser: false,
  newuser: null,
  users: [
    {
      email: "Sincere@april.biz",
      password: "Apt. 556",
    },
    {
      email: "Shanna@melissa.tv",
      password: "Suite 879",
    },
    {
      email: "Nathan@yesenia.net",
      password: "Suite 847",
    },
    {
      email: "Julianne.OConner@kory.org",
      password: "Apt. 692",
    },
  ]
}

/*
* Creating a reducer and naming it root
* @Params
*   state which has a default state
*   action which is the action object
*   returns a new state depending on the action type and payload
*/
const root = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JSON':
      return {
        ...state,
        users: action.payload
      }
    case 'SET_LOGGEDUSER':
      return {
        ...state,
        loggeduser: action.payload
      }
    case 'SET_NEWUSER':
      return {
        ...state,
        newuser: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  root,
})

