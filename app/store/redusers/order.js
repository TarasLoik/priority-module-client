import { AsyncStorage } from 'react-native';
import types from '../actions/action_types';

let initialState = {

}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.order.create:
      let data = action.payload
      console.log('data -->', data)
    case types.order.getOrders:
      //let items = AsyncStorage.getItem('ORDERS', (err, result) => {console.log(result)});
      return state
    default:
      return state
  }
}

