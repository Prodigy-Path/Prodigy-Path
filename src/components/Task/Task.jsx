import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { removeItem, setDone, setUpdateData } from '../store/taskSlice';

const Task = ({ task, index, user, updateData, dispatch }) => {
  console.log(task)
  const markDone = (id) => {
    dispatch(setDone(id));
  };

  const deleteTask = (_id, id) => {
    dispatch(removeItem({ _id, id, action: 'DELETE_TASK' }));
  };

  return (
    <div key={task._id} className="tasks__task dashCard">
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
            <span>Assigned to: </span>
            {task.assigned_to}
          </p>
        </div>
        <div className="tasks__icons-wrap">
          <span
            onClick={() => markDone(task.id)}
            title="Completed / Not Completed"
          >
            <FontAwesomeIcon
              className="tasks_icon check"
              icon={faCircleCheck}
            />
          </span>

          {task.status ? null : (
            <span
              title="Edit"
              onClick={() => {
                dispatch(
                  setUpdateData({
                    _id: task._id,
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    assigned_to: task.assigned_to,
                    status: task.status ? true : false,
                  }),
                );
              }}
            >
              <FontAwesomeIcon className="tasks_icon pen" icon={faPen} />
            </span>
          )}

          <span
            onClick={() => {

              deleteTask(task._id, task.id)
            }}
            title="Delete"
          >
            <FontAwesomeIcon className="tasks_icon trash" icon={faTrashCan} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
