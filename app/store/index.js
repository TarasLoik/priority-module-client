import {createStore, combineReducers} from 'redux'
import orderReducer from './redusers/order'
import stateReducer from './redusers/state'
import dropdownReducer from './redusers/dropdown'

export default createStore(combineReducers({
  order: orderReducer,
  state: stateReducer,
  dropdown: dropdownReducer
}))










