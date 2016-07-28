// import * as types from './mutation-types'
// export const setToken = ({ dispatch }, token) => {
//   dispatch(types.SET_TOKEN, token)
// }

// index actions
export const addUser = makeAction('ADD_USER')
export const fetchUser = makeAction('FETCH_USER')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
