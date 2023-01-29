import {
  Card,
  Group,
  Input,
  PasswordInput,
  TextInput,
  Stack,
  Button,
} from '@mantine/core';
import { IconAt, IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { login } from '../../store/loginSlice';
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {};
  return (
    <>
      <Card withBorder>
        <Stack>
          <TextInput placeholder='Username' withAsterisk label='Username' />

          <PasswordInput
            type='password'
            placeholder='Password'
            label='Password'
            withAsterisk
          />
        </Stack>
        <Button onClick={() => dispatch(login())}>Submit</Button>
      </Card>
    </>
  );
};
export default Login;
