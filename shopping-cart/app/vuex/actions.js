import * as types from './mutation-types'

const makeAction = (type) => {
  return ({ commit }, ...args) => commit(type, ...args)
}

// index actions
export const changePrice = makeAction(types.CHANGE_PRICE)
export const changeStyle = makeAction(types.CHANGE_STYLE)
export const addItem = makeAction(types.ADD_ITEM)
export const removeItem = makeAction(types.REMOVE_ITEM)
