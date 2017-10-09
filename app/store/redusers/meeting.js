import { AsyncStorage } from 'react-native';
import types from '../actions/action_types';

let initialState = {
  field: '',
  products: [],
  clientDiscount: 0,
  productDiscount: 0,
}

export default function meetingReducer(state = initialState, action) {
  switch (action.type) {
    case types.meeting.setInfo:
      let data = action.payload
      return {
        ...state,
        ...data
      }
    default:
      return state
  }
}

