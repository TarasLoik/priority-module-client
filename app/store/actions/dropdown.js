import types from './action_types'
import store from '../index'

const dropdown = {

  getItems(dataType) {
    store.dispatch({
      type: types.dropDown.getItems,
      payload: dataType
    })
  }

}

export default dropdown



