import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';

// Hàm gọi API
function fetchDataApi() {
  return axios.get('https://67219f8298bbb4d93ca9023e.mockapi.io/todo');
}

// Worker Saga: gọi API khi FETCH_DATA_REQUEST được dispatch
function* fetchDataSaga() {
  try {
    const response = yield call(fetchDataApi);
    yield put(fetchDataSuccess(response.data)); // Dispatch action success
  } catch (error) {
    yield put(fetchDataFailure(error.message)); // Dispatch action failure
  }
}

// Watcher Saga: lắng nghe action FETCH_DATA_REQUEST
export default function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
