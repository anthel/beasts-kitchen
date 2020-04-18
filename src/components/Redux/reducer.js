import { combineReducers } from 'redux'

/**
 * @desc - initial state in Redux
 * @author - Ante & Katalina
 */
const initialState = {
  loggeduser: false,
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

/**
 * @desc - Creating a reducer called root,
 * state with a default state,
 * action which is the action object and returns
 * a new state depending on the action type and payload.
 * @author - Ante & Katalina 
 */
const root = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'SET_LOGGEDUSER':
      return {
        ...state,
        loggeduser: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  root,
})

