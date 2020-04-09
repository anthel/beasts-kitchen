// Action that returns and object with type and payload depending on user accepted as params
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
})

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password
})

export const setJson = (users) => ({
  type: 'SET_JSON',
  payload: users
})

export const setCurrent = (currentuser) => ({
  type: 'SET_CURRENTUSER',
  payload: currentuser
})