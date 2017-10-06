import types from '../actions/action_types'

let initialState = {}

export default function dropdownReducer(state = initialState, action) {
  switch (action.type) {
    case types.dropDown.selectItem:
      let data = Object.assign({}, ...action.payload)
      return {
        ...state,
        data
      }
    default:
      return state
  }
}