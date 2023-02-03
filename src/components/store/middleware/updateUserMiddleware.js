import fetchApi from '../../../utility/fetchApi';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const expireDate = new Date();
expireDate.setSeconds(expireDate.getSeconds() + 30);

const updateUserMiddleware = (store) => (next) => async (action) => {
    const { user } = store.getState((state) => state).login;

    if (action.payload?.action === 'UPDATE_USER' && user) {
      let url = `${process.env.REACT_APP_SERVER}/users/${user._id}`;
      let body = {
        ...user,
        tags: action.payload.tags,
        description: action.payload.description.description
      };
      let method = 'PATCH';
      let config = {
        bearerToken: user.token
      };
      let response = await fetchApi(url, body, method, config);
      action.payload.user = response
      const checked = store.getState().login.checked;
      if (checked === true) {
        const expireDate = new Date();
        expireDate.setMonth(expireDate.getMonth() + 6);
        cookies.set('user', response, { path: '/', expires: expireDate });
      } else if (checked === false) {
        const expireDate = new Date();
        expireDate.setMinutes(expireDate.getMinutes() + 30);
        cookies.set('user', response, { path: '/', expires: expireDate });
      }
    }
    next(action);
};

export default updateUserMiddleware;
