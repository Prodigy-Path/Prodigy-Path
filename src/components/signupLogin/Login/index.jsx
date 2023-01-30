import { Card, PasswordInput, TextInput, Stack, Button } from '@mantine/core';

import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/loginSlice';

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.login);
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
  return (
    <>
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
          </Stack>
          <Button type='submit'>Submit</Button>
        </Card>
      </form>
      <p>
        Don't have an account? <Link to={'/signup'}>Create one here</Link>
      </p>
      {isLoggedIn ? <Navigate to='/' replace={true} /> : null}
    </>
  );
};
export default Login;
