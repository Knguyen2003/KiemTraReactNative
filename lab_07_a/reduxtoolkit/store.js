import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,  // Kết nối todoSlice vào Store
  },
});

export default store;
