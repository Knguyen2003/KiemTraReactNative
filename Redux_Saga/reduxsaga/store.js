import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import jobReducer from './reducers';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({ job: jobReducer });  // kết hợp nhiều reducer thành một root reducer.
// Tạo middleware cho Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)  //// Thêm saga middleware
);

sagaMiddleware.run(rootSaga);

export default store;


