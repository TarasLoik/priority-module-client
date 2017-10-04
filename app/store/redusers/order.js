import { AsyncStorage } from 'react-native';
import types from '../actions/action_types'

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case types.order.create:
      console.log(state)
      return state
    default:
      return state
  }
}