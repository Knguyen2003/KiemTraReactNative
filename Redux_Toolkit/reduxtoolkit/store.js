import { configureStore } from '@reduxjs/toolkit';
import slice from './taskSlice';

const store = configureStore({
  reducer: {
    job: slice,
  },
});

export default store;