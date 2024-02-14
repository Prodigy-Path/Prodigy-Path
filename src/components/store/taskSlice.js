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
      action.payload.response.forEach((item, index) => {
        item.id = index + 1;
      });
      state.taskList = [...action.payload.response];
    },

    tasks: (state, action) => {
      action.payload.response.forEach((item, index) => {
        item.id = index + 1;
      });
      state.taskList = [...action.payload.response];
    },
    removeItem: (state, action) => {
      const id = action.payload.id;
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
        (task) => task.id !== action.payload.updateData.id,
      );
      state.taskList = [...filterRecords, action.payload.updateData];
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
