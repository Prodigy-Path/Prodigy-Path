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

const Login = () => {
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
        <Button>Submit</Button>
      </Card>
    </>
  );
};
export default Login;
