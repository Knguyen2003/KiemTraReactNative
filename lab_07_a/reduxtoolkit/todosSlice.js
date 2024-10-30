// Ví dụ về todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [], // Danh sách công việc
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now().toString(), // Tạo ID duy nhất cho mỗi todo
        task: action.payload,
        status: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.status = !todo.status; // Đổi trạng thái hoàn thành
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
