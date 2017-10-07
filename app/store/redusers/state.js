import { AsyncStorage } from 'react-native'
import types from '../actions/action_types'

let initialState = {}

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case types.state.setState:
      console.log('we are here', action.payload)
      let newState = action.payload;
      let testData = {...state, ...newState}
      console.log('state before change ---->', state)
      console.log('after change ---->', testData)
      return testData
   /* case types.state.getState:
      let neState = Object.assign({},{...state})
      return state*/
    default:
      return state
  }
}
