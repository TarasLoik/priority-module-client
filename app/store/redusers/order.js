import { AsyncStorage } from 'react-native';
import types from '../actions/action_types';
import orderApi from '../storage/orders'

let initialState = {}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.order.create:
      //login for saving to AsyncStorage
      orderApi.create(action.payload);
      return state
    default:
      return state
  }
}

