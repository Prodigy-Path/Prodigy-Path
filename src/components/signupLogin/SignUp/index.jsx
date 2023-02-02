/** @format */

import {
  Card,
  PasswordInput,
  TextInput,
  Stack,
  Button,
  Chip,
  Checkbox,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login, setChecked } from '../../store/loginSlice';

const SignUp = () => {
  const { isLoggedIn, checked } = useSelector((state) => state.login);
  const [visible, { toggle }] = useDisclosure(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        action: 'signUp',
        username: e.target.Username.value,
        name: e.target.Name.value,
        email: e.target.Email.value,
        password: e.target.Password.value,
        role: e.target.role.value,
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
            <TextInput
              placeholder='Name'
              withAsterisk
              label='Name'
              name='Name'
            />
            <TextInput placeholder='Email' label='E-mail' name='Email' />

            <PasswordInput
              name='Password'
              type='password'
              placeholder='Password'
              label='Password'
              withAsterisk
              visible={visible}
              onVisibilityChange={toggle}
            />
            <PasswordInput
              name='PasswordConfirm'
              type='password'
              placeholder='Password'
              label='Confirm Password'
              withAsterisk
            />
            <Checkbox
              value={checked}
              onChange={handleCheck}
              label='Keep me logged in'
            />
          </Stack>
          <Chip.Group>
            <Chip name='role' value='mentor'>
              Mentor
            </Chip>
            <Chip name='role' value='protege'>
              Protege
            </Chip>
          </Chip.Group>
          <Button type='submit'>Submit</Button>
        </Card>
      </form>
      {isLoggedIn ? <Navigate to='/' replace={true} /> : null}
    </div>
  );
};
export default SignUp;
