// import * as types from './mutation-types'
// export const setToken = ({ dispatch }, token) => {
//   dispatch(types.SET_TOKEN, token)
// }

// index actions
export const changePrice = makeAction('CHANGE_PRICE')
export const changeStyle = makeAction('CHANGE_STYLE')
export const addItem = makeAction('ADD_ITEM')
export const removeItem = makeAction('REMOVE_ITEM')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
