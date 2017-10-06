import { AsyncStorage } from 'react-native'
import types from '../actions/action_types'

let initialState = {
  info: 'info',
  name: 'StateReducer'
}

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case types.state.setState:
      console.log('we are here', action.payload)
      let newState = action.payload;
      let testData = {...state, data: {...newState}}
      console.log('test data', testData)
      return testData
   /* case types.state.getState:
      let neState = Object.assign({},{...state})
      return state*/
    default:
      return state
  }
}
