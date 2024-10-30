// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_JOBS_REQUEST, fetchJobsSuccess, fetchJobsFailure,
  DELETE_JOB_REQUEST, deleteJobSuccess, deleteJobFailure,
  ADD_JOB_REQUEST, addJobSuccess, addJobFailure,
  EDIT_JOB_REQUEST, editJobSuccess, editJobFailure,
} from './actions';

function* fetchJobs() {
  try {
    const response = yield call(axios.get, 'https://67219f8298bbb4d93ca9023e.mockapi.io/todo');
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* remove(action) {
  try {
    yield call(axios.delete, `https://67219f8298bbb4d93ca9023e.mockapi.io/todo/${action.payload}`);
    yield put(deleteJobSuccess(action.payload));
  } catch (error) {
    yield put(deleteJobFailure(error.message));
  }
}

function* add(action) {
  try {
    const response = yield call(axios.post, 'https://67219f8298bbb4d93ca9023e.mockapi.io/todo', action.payload);
    yield put(addJobSuccess(response.data));
  } catch (error) {
    yield put(addJobFailure(error.message));
  }
}

function* update(action) {
  try {
    const response = yield call(axios.put, `https://67219f8298bbb4d93ca9023e.mockapi.io/todo/${action.payload.id}`, action.payload);
    yield put(editJobSuccess(response.data));
  } catch (error) {
    yield put(editJobFailure(error.message));
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(DELETE_JOB_REQUEST, remove);
  yield takeLatest(ADD_JOB_REQUEST, add);
  yield takeLatest(EDIT_JOB_REQUEST, update);
}
