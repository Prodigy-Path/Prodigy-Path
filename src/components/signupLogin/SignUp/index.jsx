/** @format */

import {
  Card,
  PasswordInput,
  TextInput,
  Stack,
  Button,
  Chip,
  Checkbox,
  MultiSelect,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login, setChecked } from '../../store/loginSlice';

const SignUp = () => {
  const { isLoggedIn, checked } = useSelector((state) => state.login);
  const [visible, { toggle }] = useDisclosure(false);
  const dispatch = useDispatch();
  const data = [
    { value: 'Git', label: 'Git', group: 'JavaScript' },
    { value: 'GitHub', label: 'GitHub', group: 'JavaScript' },
    { value: 'React', label: 'React', group: 'JavaScript' },
    { value: 'React-Native', label: 'React-Native', group: 'JavaScript' },
    { value: 'JavaScript', label: 'JavaScript', group: 'JavaScript' },
    { value: 'CSS', label: 'CSS', group: 'JavaScript' },
    { value: 'HTML', label: 'HTML', group: 'JavaScript' },
    { value: 'SCSS', label: 'SCSS', group: 'JavaScript' },
    { value: 'Web Development', label: 'Web Development', group: 'JavaScript' },
    { value: 'Front-End', label: 'Front-End', group: 'JavaScript' },
    { value: 'ECMAScript', label: 'ECMAScript', group: 'JavaScript' },
    {
      value: 'JavaScript Libraries',
      label: 'JavaScript Libraries',
      group: 'JavaScript',
    },
    { value: 'jQuery', label: 'jQuery', group: 'JavaScript' },
    { value: 'Angular', label: 'Angular', group: 'JavaScript' },
    { value: 'Vue.js', label: 'Vue.js', group: 'JavaScript' },
    { value: 'Node.js', label: 'Node.js', group: 'JavaScript' },
    { value: 'UI', label: 'UI', group: 'JavaScript' },
    { value: 'UX', label: 'UX', group: 'JavaScript' },
    {
      value: 'Web Applications',
      label: 'Web Applications',
      group: 'JavaScript',
    },
    {
      value: 'Single-Page Applications (SPAs)',
      label: 'Single-Page Applications (SPAs)',
      group: 'JavaScript',
    },
    { value: 'AJAX', label: 'AJAX', group: 'JavaScript' },
    { value: 'JSON', label: 'JSON', group: 'JavaScript' },
    { value: 'Asynchronous', label: 'Asynchronous', group: 'JavaScript' },
    {
      value: 'Object-Oriented Programming',
      label: 'Object-Oriented Programming',
      group: 'JavaScript',
    },
    {
      value: 'Event-Driven Programming',
      label: 'Event-Driven Programming',
      group: 'JavaScript',
    },
    {
      value: 'DOM Manipulation',
      label: 'DOM Manipulation',
      group: 'JavaScript',
    },
    { value: 'REST APIs', label: 'REST APIs', group: 'JavaScript' },
    { value: 'npm', label: 'npm', group: 'JavaScript' },
    { value: 'CLI', label: 'CLI', group: 'JavaScript' },
    { value: 'Webpack', label: 'Webpack', group: 'JavaScript' },
    { value: 'Python', label: 'Python', group: 'Python' },
    { value: 'Azure', label: 'Azure', group: 'Python' },
    { value: 'Django', label: 'Django', group: 'Python' },
    { value: 'Numpy', label: 'Numpy', group: 'Python' },
    { value: 'Machine Learning', label: 'Machine Learning', group: 'Python' },
    { value: 'Pandas', label: 'Pandas', group: 'Python' },
    { value: 'Scikit-learn', label: 'Scikit-learn', group: 'Python' },
    { value: 'Jupyter Notebooks', label: 'Jupyter Notebooks', group: 'Python' },
    { value: 'Keras', label: 'Keras', group: 'Python' },
    { value: 'PyTorch', label: 'PyTorch', group: 'Python' },
    { value: 'PyCharm', label: 'PyCharm', group: 'Python' },
  ];

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
  const checkSame = (e) => {
    if (e.target.passwordConfirm.value !== e.target.password.value) {
      return 'Passwords do not match';
    } else {
      return null;
    }
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
              placeholder='Password'
              label='Password'
              withAsterisk
              visible={visible}
              onVisibilityChange={toggle}
            />
            <PasswordInput
              name='PasswordConfirm'
              placeholder='Password'
              label='Confirm Password'
              withAsterisk
            />
            <MultiSelect
              data={data}
              placeholder='Pick any tags you would like to use to find mentors'
              label='Tags'
              searchable
              nothingFound='Nothing found'
              clearButtonLabel='Clear selection'
              clearable
            />
            <Checkbox
              value={checked}
              onChange={handleCheck}
              label='Keep me logged in'
            />
            <Chip.Group>
              <Chip name='role' value='mentor'>
                Mentor
              </Chip>
              <Chip name='role' value='protege'>
                Protege
              </Chip>
            </Chip.Group>
            <Button type='submit'>Submit</Button>
          </Stack>
        </Card>
      </form>
      {isLoggedIn ? <Navigate to='/' replace={true} /> : null}
    </div>
  );
};
export default SignUp;
