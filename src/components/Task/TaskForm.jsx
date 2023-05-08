import React from 'react';
import { Input, Select } from '@mantine/core';
import {
  setNewTitle,
  setNewDescription,
  setNewMentee,
  setUpdateData,
  tasks,
  updateItem,
} from '../store/taskSlice';
import { changeTask } from './helperFunctions';
import { useSelector } from 'react-redux';

const TaskForm = ({
  newTitle,
  newDescription,
  newMentee,
  updateData,
  userConnectionsUsers,
  dispatch,
}) => {
  const { taskList } = useSelector((state) => state.taskList);
  const { user } = useSelector((state) => state.login);
  const addTask = () => {
    if (newTitle) {
      let newTaskId = taskList.length + 1;
      let newEntry = {
        id: newTaskId,
        title: newTitle,
        description: newDescription,
        assigned_by: user.username,
        assigned_to: newMentee,
        status: false,
      };

      dispatch(tasks({ tasks: newEntry, action: 'NEW_TASK' }));

      setNewTitle('');
      setNewDescription('');
      setNewMentee('');
    }
  };

  const cancelUpdate = () => {
    dispatch(setUpdateData(''));
  };

  const updateTask = () => {
    dispatch(updateItem({ updateData, action: 'UPDATE_TASK' }));
    dispatch(setUpdateData(''));
  };

  const formContent = updateData ? (
    <>
      <Input
        label="Title of task"
        placeholder="Title of task"
        value={updateData.title}
        onChange={(e) => changeTask({ title: e.target.value })}
        className="tasks__input"
      />
      <Input
        label="Description task:"
        placeholder="Description of task..."
        value={updateData.description}
        onChange={(e) => changeTask({ description: e.target.value })}
        className="tasks__input"
      />

      <Select
        className="tasks__input"
        value={updateData.assigned_to}
        data={userConnectionsUsers.map((item) => item.username)}
        onChange={(value) => changeTask({ assigned_to: value })}
        label="Protege assigned to task:"
        placeholder="Who will you assign this task?"
      />
      <button className="tasks__btn" onClick={updateTask}>
        Update
      </button>
      <button className="tasks__btn" onClick={cancelUpdate}>
        Cancel
      </button>
    </>
  ) : (
    <>
      <Input
        label="Title of task"
        placeholder="Title of task"
        value={newTitle.title}
        onChange={(e) => dispatch(setNewTitle(e.target.value))}
        className="tasks__input"
      />
      <Input
        label="Description task:"
        placeholder="Description of task..."
        value={newDescription}
        onChange={(e) => dispatch(setNewDescription(e.target.value))}
        className="tasks__input"
      />

      <Select
        className="tasks__input"
        value={newMentee}
        data={userConnectionsUsers?.map((item) => item.username)}
        onChange={(e) => dispatch(setNewMentee(e))}
        label="Protege assigned to task:"
        placeholder="Who will you assign this task?"
      />
      <button onClick={addTask} className="tasks__btn">
        Add Task
      </button>
    </>
  );

  return <div className="tasks__form">{formContent}</div>;
};

export default TaskForm;
