import types from './action_types'
import store from '../index'

const meeting = {

  setInfo(data) {
    store.dispatch({
      type: types.meeting.setInfo,
      payload: data
    })
  }
}

export default meeting