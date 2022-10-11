import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habitsList: [
    { id: '1665447489829', title: 'Read', value: '10', unit: 'minutes' },
    { id: '1665447650738', title: 'Meditate', value: '15', unit: 'minutes' },
    { id: '1665507279182', title: 'Code', value: '6', unit: 'hours' },
  ],
};

// TODO - Reducers for adding a habit, editing a habit and removing a habit
export const habitsListSlice = createSlice({
  name: 'habitsList',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  habitsListSlice.actions;

export default habitsListSlice.reducer;