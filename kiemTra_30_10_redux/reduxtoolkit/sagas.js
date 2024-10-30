import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } from './todosSlice';

// Hàm gọi API để lấy danh sách todos
function fetchTodosApi() {
  return axios.get('https://67219f8298bbb4d93ca9023e.mockapi.io/todo');
}

// Saga để xử lý việc gọi API
function* fetchTodosSaga() {
  try {
    yield put(fetchTodosStart());
    const response = yield call(fetchTodosApi);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

// Watcher saga: Theo dõi các action được dispatch
export default function* rootSaga() {
  yield takeEvery('todos/fetchTodos', fetchTodosSaga);
}
