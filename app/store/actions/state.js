import types from './action_types'
import store from '../index'

const state = {

  /*getState() {
    store.dispatch({
      type: types.state.getState
    })
  },*/

  setState(data) {
    store.dispatch({
      type: types.state.setState,
      payload: {...data}
    })
  }

}

export default state
