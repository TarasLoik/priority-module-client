import types from '../actions/action_types'

// mock data
import demo_data from '../initial_data'

let initialState = {}

export default function dropdownReducer(state = initialState, action) {
  switch (action.type) {
    case types.dropDown.getItems:
      let items = demo_data[action.payload].slice()
      return {
        ...state,
        items
      }
    default:
      return state
  }
}