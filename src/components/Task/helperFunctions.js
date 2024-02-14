import { setDone, removeItem, setUpdateData } from '../store/taskSlice';

export const markDone = (id, dispatch) => {
  dispatch(setDone(id));
};

export const deleteTask = (_id, id, dispatch) => {
  dispatch(removeItem({ _id, id, action: 'DELETE_TASK' }));
};

export const changeTask = (
  { title, description, assigned_to },
  updateData,
  dispatch,
) => {
  let newEntry = {
    _id: updateData._id,
    id: updateData.id,
    title,
    description: description,
    assigned_to,
    status: updateData.status ? true : false,
  };

  dispatch(setUpdateData(newEntry));
};

export const cancelUpdate = (dispatch) => {
  dispatch(setUpdateData(''));
};
