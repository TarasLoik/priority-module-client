import { AsyncStorage } from 'react-native';
import types from '../actions/action_types';

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case types.order.create:
      let data = action.payload
      return {...state, data }
    default:
      return state
  }
}
