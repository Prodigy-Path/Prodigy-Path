/** @format */
import {
  Card,
  PasswordInput,
  TextInput,
  Stack,
  Button,
  Checkbox,
} from '@mantine/core';

import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, setChecked } from '../../store/loginSlice';
const Login = () => {
  const { isLoggedIn, user, checked } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        action: 'login',
        username: e.target.Username.value,
        password: e.target.Password.value,
      }),
    );
  };
  const handleCheck = (e) => {
    dispatch(setChecked(e.target.value));
  };
  return (
    <div className='login__form'>
      <form onSubmit={handleSubmit}>
        <Card withBorder>
          <Stack>
            <TextInput
              placeholder='Username'
              withAsterisk
              label='Username'
              name='Username'
            />

            <PasswordInput
              name='Password'
              type='password'
              placeholder='Password'
              label='Password'
              withAsterisk
            />
            <Checkbox
              value={checked}
              onChange={handleCheck}
              label='Keep me logged in'
            />
          </Stack>
          <Button type='submit'>Submit</Button>
        </Card>
      </form>
      <p className='create-account'>
        Don't have an account? <Link to={'/signup'}>Create one here</Link>
      </p>
      {isLoggedIn ? <Navigate to='/' replace={true} /> : null}
    </div>
  );
};
export default Login;
