/**
 * @desc - Action that returns an object with type and 
 * payload depending on users, loggeduser and newuser accepted as params.
 * @author - Ante & Katalina
 */
export const setJson = (users) => ({
  type: 'SET_JSON',
  payload: users
})

export const setLoggedUser = (loggeduser) => ({
  type: 'SET_LOGGEDUSER',
  payload: loggeduser
})

export const setNewUser = (newuser) => ({
  type: 'SET_NEWUSER',
  payload: newuser
})