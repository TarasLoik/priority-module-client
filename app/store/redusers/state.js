import { AsyncStorage } from 'react-native'
import types from '../actions/action_types'

let initialState = {}

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case types.state.setState:
      console.log('we are here', action.payload)
      let newState = action.payload;
      let testData = {...state, ...newState}
      return testData
    default:
      return state
  }
}
