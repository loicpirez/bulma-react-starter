import { put, takeLatest, all } from 'redux-saga/effects'
import axiosInstance from '../utils/axios-instance'

function * getApi (action) {
  try {
    console.log('The action is: ', action)
    const json = yield axiosInstance.get(action.apiUrl)
      .then(response => response.data)
    yield put({ type: 'API_RESULT_RECEIVED', json })
  } catch (error) {
    yield put({ type: 'API_REQUEST_FAILED', error })
  }
}

function * actionWatcher () {
  yield takeLatest('GET_API', getApi)
}

export default function * rootSaga () {
  yield all([
    actionWatcher()
  ])
}
