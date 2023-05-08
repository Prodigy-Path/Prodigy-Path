import { useSelector, useDispatch } from 'react-redux';
import {
  setTasks,
} from '../store/taskSlice';
import { useEffect } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

const MentorTasks = () => {
  const dispatch = useDispatch();

  const { taskList, newTitle, newDescription, newMentee, updateData } =
    useSelector((state) => state.taskList);
  const { user, userConnectionsUsers } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(setTasks({ action: 'GET_TASKS' }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTasks = taskList.filter(
    (task) => task.assigned_by === user.username,
  );

  return (
    <div className="container tasks">
      <h2 className="tasks__title">Task Assignment</h2>
      <TaskForm
        newTitle={newTitle}
        newDescription={newDescription}
        newMentee={newMentee}
        updateData={updateData}
        userConnectionsUsers={userConnectionsUsers}
        dispatch={dispatch}
      />
      {filteredTasks.length ? '' : 'Currently no tasks...'}
      {filteredTasks.map((task, index) => (
        <Task
          key={task._id}
          task={task}
          index={index}
          user={user}
          updateData={updateData}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default MentorTasks;
