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
  Alert,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login, setChecked } from '../../store/loginSlice';

const SignUp = () => {
  const { isLoggedIn, checked } = useSelector((state) => state.login);
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
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
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
    } else if (email === '') {
      setError('Please fill out all required fields Email is empty');
    } else if (password !== passwordConfirm) {
      setError('');
      setError('Passwords do not match');
      return;
    } else if (password === '') {
      setError('Please fill out all required fields Password is empty');
    } else if (passwordConfirm === '') {
      setError('Please fill out all required fields Password Confirm is empty');
    } else if (user === '') {
      setError('Please fill out all required fields Username is empty');
    } else if (firstName === '') {
      setError('Please fill out all required fields Name is empty');
    } else {
      setError('');
      dispatch(
        login({
          action: 'signUp',
          username: e.target.Username.value,
          name: e.target.Name.value,
          email: e.target.Email.value,
          password: e.target.Password.value,
          role: e.target.role.value,
          tags: ref.current,
        }),
      );
      let result = e.target.MultiSelect;
      console.log(result);
    }
  };
  const ref = useRef([]);
  const changeTags = (value) => {
    ref.current = value;
    console.log(ref.current);
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
              onChange={(e) => setUser(e.target.value)}
            />
            <TextInput
              placeholder='Name'
              withAsterisk
              label='Name'
              name='Name'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextInput
              placeholder='Email'
              label='E-mail'
              name='Email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              name='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              label='Password'
              withAsterisk
            />
            <PasswordInput
              name='PasswordConfirm'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder='Password'
              label='Confirm Password'
              withAsterisk
            />
            {error && (
              <Alert
                icon={<IconAlertCircle size={16} />}
                title='Alert'
                color='red'
                className='login__errorMessage'
              >
                {error}
              </Alert>
            )}
            <MultiSelect
              data={data}
              placeholder='Pick any tags you would like to use to find mentors'
              name='Multiselect'
              label='Tags'
              searchable
              ref={changeTags}
              onChange={(value) => changeTags(value)}
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
