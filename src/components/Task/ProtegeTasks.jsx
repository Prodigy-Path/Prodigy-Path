/** @format */

import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, setDone, setTasks } from '../store/taskSlice';
const Tasks = () => {
  const dispatch = useDispatch();

  const { taskList } = useSelector((state) => state.taskList);

  useEffect(() => {
    dispatch(setTasks({ action: 'GET_TASKS' }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTask = (id) => {
    dispatch(removeItem(id));
  };

  const markDone = (id) => {
    dispatch(setDone(id));
  };

  return (
    <div className="tasks">
      {taskList &&
        [...taskList]
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => (
            <div
              key={task.id}
              className="tasks__task"
            >
              <div className="tasks__task-content">
                <div
                  className={`tasks__task-status ${
                    task.status ? 'tasks__task-status--done' : ''
                  }`}
                >
                  <p>
                    Task Number:{' '}
                    <span className="tasks__task-number">{index + 1}</span>
                  </p>
                  <p>
                    Title:{' '}
                    <span className="tasks__task-text">{task.title}</span>
                  </p>
                  <p>
                    <span>Description: </span> {task.description}
                  </p>
                  <p>
                    <span>Assigned by: </span>
                    {task.assigned_by}
                  </p>
                </div>
                <div className="tasks__icons-wrap">
                  <span
                    onClick={(e) => markDone(task.id)}
                    title="Completed / Not Completed"
                  >
                    <FontAwesomeIcon
                      className="tasks_icon check"
                      icon={faCircleCheck}
                    />
                  </span>

                  <span
                    onClick={() => deleteTask(task.id)}
                    title="Delete"
                  >
                    <FontAwesomeIcon
                      className="tasks_icon trash"
                      icon={faTrashCan}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
export default Tasks;
