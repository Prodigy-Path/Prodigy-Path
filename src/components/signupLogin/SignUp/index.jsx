/** @format */

import {
  Card,
  PasswordInput,
  TextInput,
  Stack,
  Button,
  Chip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../store/loginSlice';
const SignUp = () => {
  const { isLoggedIn } = useSelector((state) => state.login);
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
  return (
    <div className="login__form">
      <form onSubmit={handleSubmit}>
        <Card withBorder>
          <Stack>
            <TextInput
              placeholder="Username"
              withAsterisk
              label="Username"
              name="Username"
            />
            <TextInput
              placeholder="Name"
              withAsterisk
              label="Name"
              name="Name"
            />
            <TextInput
              placeholder="Email"
              label="E-mail"
              name="Email"
            />

            <PasswordInput
              name="Password"
              type="password"
              placeholder="Password"
              label="Password"
              withAsterisk
              visible={visible}
              onVisibilityChange={toggle}
            />
            <PasswordInput
              name="PasswordConfirm"
              type="password"
              placeholder="Password"
              label="Confirm Password"
              withAsterisk
            />
          </Stack>
          <Button type="submit">Submit</Button>
          <Chip.Group>
            <Chip
              name="role"
              value="mentor"
            >
              Mentor
            </Chip>
            <Chip
              name="role"
              value="protege"
            >
              Protege
            </Chip>
          </Chip.Group>
        </Card>
      </form>
      {isLoggedIn ? (
        <Navigate
          to="/"
          replace={true}
        />
      ) : null}
    </div>
  );
};
export default SignUp;
