// Action that returns and object with type and payload depending on user accepted as params
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