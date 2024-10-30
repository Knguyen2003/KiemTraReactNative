import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// Import các reducer và saga
import todoReducer from '../reduxtoolkit/todosSlice'; // Reducer từ Redux Toolkit
import rootSaga from './sagas'; // Root Saga từ Redux Saga
import dataReducer from './reducers'; // Reducer từ Redux Saga

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Kết hợp tất cả các reducers vào một rootReducer
const rootReducer = combineReducers({
  todos: todoReducer,  // Reducer của Redux Toolkit
  data: dataReducer,   // Reducer của Redux Saga
});

// Cấu hình store với reducers và middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Chạy root saga
sagaMiddleware.run(rootSaga);

export default store;


