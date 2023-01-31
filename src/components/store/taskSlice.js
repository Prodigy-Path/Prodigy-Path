/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  taskList: [],
  newTask: '',
  updateData: '',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    tasks: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      let newTasks = state.taskList.filter((task) => task.id !== id);
      state.taskList = [...newTasks];
    },
    setDone: (state, action) => {
      const id = action.payload;
      state.taskList = state.taskList.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      });
    },
    updateItem: (state, action) => {
      let filterRecords = [...state.taskList].filter(
        (task) => task.id !== action.payload.id,
      );
      state.taskList = [...filterRecords, action.payload];
    },
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
    setUpdateData: (state, action) => {
      state.updateData = action.payload;
    },
  },
});

export const {
  tasks,
  removeItem,
  setDone,
  setNewTask,
  updateItem,
  setUpdateData,
} = taskSlice.actions;

export default taskSlice.reducer;
