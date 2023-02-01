/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  taskList: [],
  newTitle: '',
  newMentee: '',
  newDescription: '',
  updateData: '',
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      console.log(action.payload);
      state.taskList = [...action.payload.response];
    },

    tasks: (state, action) => {
      state.taskList.push(action.payload.tasks);
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
      console.log(action.payload);
      let filterRecords = [...state.taskList].filter(
        (task) => task.id !== action.payload.id,
      );
      state.taskList = [...filterRecords, action.payload];
    },
    setNewTitle: (state, action) => {
      state.newTitle = action.payload;
    },
    setNewDescription: (state, action) => {
      state.newDescription = action.payload;
    },
    setNewMentee: (state, action) => {
      state.newMentee = action.payload;
    },
    setUpdateData: (state, action) => {
      state.updateData = action.payload;
    },
  },
});

export const {
  setTasks,
  setNewTitle,
  setNewDescription,
  setNewMentee,
  tasks,
  removeItem,
  setDone,
  updateItem,
  setUpdateData,
} = taskSlice.actions;

export default taskSlice.reducer;
