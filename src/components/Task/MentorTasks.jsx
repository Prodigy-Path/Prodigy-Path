/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  tasks,
  removeItem,
  setDone,
  setNewTitle,
  setNewDescription,
  setNewMentee,
  updateItem,
  setUpdateData,
  setTasks,
} from '../store/taskSlice';
import { Input, Select } from '@mantine/core';
import { useEffect } from 'react';
const Tasks = () => {
  const dispatch = useDispatch();

  const { taskList, newTitle, newDescription, newMentee, updateData } =
    useSelector((state) => state.taskList);
  const { user, userConnectionsUsers, usersConnections } = useSelector(
    (state) => state.login,
  );

  useEffect(() => {
    dispatch(setTasks({ action: 'GET_TASKS' }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userConnectionsUsers, usersConnections);
  const addTask = () => {
    if (newTitle) {
      let newTaskId = taskList.length + 1;
      let newEntry = {
        id: newTaskId,
        title: newTitle,
        description: newDescription,
        assigned_by: user.id,
        mentee: newMentee,
        status: false,
      };

      dispatch(tasks({ tasks: newEntry, action: 'NEW_TASK' }));

      setNewTitle('');
      setNewDescription('');
      setNewMentee('');
    }
  };

  const deleteTask = (id) => {
    dispatch(removeItem(id));
  };

  const markDone = (id) => {
    dispatch(setDone(id));
  };

  const cancelUpdate = () => {
    dispatch(setUpdateData(''));
  };

  const changeTask = ({
    title = updateData.title,
    description = updateData.description,
    mentee = updateData.mentee,
  }) => {
    let newEntry = {
      id: updateData.id,
      title,
      description,
      mentee,
      status: updateData.status ? true : false,
    };
    dispatch(setUpdateData(newEntry));
  };

  const updateTask = () => {
    dispatch(updateItem(updateData));
    dispatch(setUpdateData(''));
  };

  return (
    <div className="container tasks">
      <h2 className="tasks__title">Task Assignment</h2>

      {updateData && updateData ? (
        <div className="tasks__form-update">
          <div className="tasks__input-wrap">
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
              value={updateData.mentee}
              data={['Me']}
              onChange={(value) => changeTask({ mentee: value })}
              label="Protege assigned to task:"
              placeholder="Who will you assign this task?"
            />
          </div>
          <div className="tasks__button-wrap">
            <button
              className="tasks__btn btn"
              onClick={updateTask}
            >
              Update
            </button>
            <button
              className="tasks__btn btn"
              onClick={cancelUpdate}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="tasks__form-add">
          <div className="tasks__input-wrap">
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
              data={['Me']}
              onChange={(e) => dispatch(setNewMentee(e))}
              label="Protege assigned to task:"
              placeholder="Who will you assign this task?"
            />
          </div>
          <div className="tasks__button-wrap">
            <button
              className="tasks__btn btn"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      )}
      {taskList && taskList.length ? '' : 'Currently no tasks...'}

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
                    <span>Assigned to: </span>
                    {task.mentee}
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

                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() => {
                        dispatch(
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            describe: task.description,
                            mentee: task.mentee,
                            status: task.status ? true : false,
                          }),
                        );
                      }}
                    >
                      <FontAwesomeIcon
                        className="tasks_icon pen"
                        icon={faPen}
                      />
                    </span>
                  )}

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
