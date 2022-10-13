import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  habitsList: [
    { id: '1665447489829', title: 'Read', value: '10', unit: 'pages' },
    { id: '1665447650738', title: 'Meditate', value: '15', unit: 'minutes' },
    { id: '1665507279182', title: 'Code', value: '8', unit: 'hours' },
  ],
};

export const habitsListSlice = createSlice({
  name: 'habitsList',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = action.payload.newHabit;
      state.habitsList.push(newHabit);
    },
    removeHabit: (state, action) => {
      const removeID = action.payload.removeID;
      const { habitsList } = current(state);
      const index = habitsList.findIndex(habit => removeID === habit.id);
      state.habitsList.splice(index, 1);
    },
    editHabit: (state, action) => {
      const { editID, title, value, unit } = action.payload;
      console.log('In edit habit: ');
      console.log(editID, title, value, unit);
      state.habitsList.forEach(item => {
        if (item.id === editID) {
          item.title = title;
          item.value = value;
          item.unit = unit;
        }
      });
    },
  },
});

export const { removeHabit, addHabit, editHabit } = habitsListSlice.actions;

export default habitsListSlice.reducer;
