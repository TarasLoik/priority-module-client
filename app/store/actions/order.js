import types from './action_types'
import store from '../index'

const order = {
  // Action for creating order
  create(data) {
    store.dispatch({
      type: types.order.create,
      payload: {...data}
    })
  },
}

export default order
