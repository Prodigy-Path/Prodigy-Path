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
  setNewTask,
  updateItem,
  setUpdateData,
} from '../store/taskSlice';
const Post = () => {
  const dispatch = useDispatch();

  const { taskList, newTask, updateData } = useSelector(
    (state) => state.taskList,
  );

  const addTask = () => {
    if (newTask) {
      let newTaskId = taskList.length + 1;
      let newEntry = { id: newTaskId, title: newTask, status: false };

      console.log(newEntry);
      dispatch(tasks(newEntry));
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    dispatch(removeItem(id));
  };

  const markDone = (id) => {
    dispatch(setDone(id));
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    dispatch(updateItem(updateData));
    setUpdateData('');
  };

  return (
    <div className="container tasks">
      <h2 className="tasks__title">Task Assignment</h2>

      {updateData && updateData ? (
        <div className="tasks__form-update">
          <div className="tasks__input-wrap">
            <label value="Add Task">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="tasks__input"
              />
            </label>
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
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="tasks__input"
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
                  <span className="tasks__task-number">{index + 1}</span>
                  <span className="tasks__task-text">{task.title}</span>
                </div>

                <div className="tasks__icons-wrap">
                  <span
                    onClick={(e) => markDone(task.id)}
                    title="Completed / Not Completed"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>

                  {task.status ? null : (
                    <span
                      title="Edit"
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}

                  <span
                    onClick={() => deleteTask(task.id)}
                    title="Delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
export default Post;
