/**
 * @desc - Action that returns an object with type and 
 * payload depending on users, loggeduser and newuser accepted as params.
 * @author - Ante & Katalina
 */
export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
})

export const setLoggedUser = (loggeduser) => ({
  type: 'SET_LOGGEDUSER',
  payload: loggeduser
})