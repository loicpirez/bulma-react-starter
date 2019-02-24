import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

function * fetchNews () {
  const json = yield axios.get('https://baconipsum.com/api/?type=meat-and-filler')
    .then(response => response.data)
  yield put({ type: 'API_RESULT_RECEIVED', json: json })
}

function * actionWatcher () {
  yield takeLatest('GET_API', fetchNews)
}

export default function * rootSaga () {
  yield all([
    actionWatcher()
  ])
}
