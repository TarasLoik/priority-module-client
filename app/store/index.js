import {createStore, combineReducers} from 'redux'

import orderReducer from './redusers/order'

export default createStore(combineReducers({
  order: orderReducer
}))