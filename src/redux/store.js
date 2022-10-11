import { configureStore } from '@reduxjs/toolkit';
import habitsListReducer from './habitsList.js';

export const store = configureStore({
  reducer: {
    habitsList: habitsListReducer,
  },
});
