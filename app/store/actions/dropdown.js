import types from './action_types'
import store from '../index'

const dropdown = {

  selectItem(ind, item) {
    store.dispatch({
      type: types.dropDown.selectItem,
      payload: {
        index: ind,
        item: item
      }
    })
  }

}

export default dropdown



