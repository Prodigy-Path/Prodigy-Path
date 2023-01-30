/** @format */

import React from 'react';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  Header,
  Group,
  Text,
  SegmentedControl,
  Center,
  Box,
  Button,
  Burger,
  Anchor,
  NavLink,
} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { setOpened, setDrawer } from '../store/drawerSlice';
// import { AuthContext } from '../../context/Auth';
import { logout } from '../store/loginSlice';
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);
  const { opened, menuClass } = useSelector((state) => state.drawer);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleClick = (e) => {
    <Navigate to={`/${e.target.value}`} replace={true}></Navigate>;
  };

  useEffect(() => {
    dispatch(setDrawer());
  }, [opened]);
  return (
    <Header height={75} fixed={true} className='header'>
      <Group position='apart' className='header__group'>
        <Text className='header__group__title'>ProdigyPath</Text>
        <Group position='apart' className='header__group__nav'>
          <SegmentedControl
            className='header__group__nav__segment'
            transitionDuration={500}
            transitionTimingFunction='linear'
            data={[
              { label: 'Dashboard', value: 'dashboard' },
              { label: 'Tasks', value: 'tasks' },
              { label: 'Explore', value: 'Explore' },
            ]}
          />
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              className='header__group__nav__signup'
              size='md'
              styles={(theme) => ({
                root: {
                  '&:hover': {
                    backgroundColor: theme.fn.darken('#678983', 0.05),
                    color: '#E6DDC4',
                  },
                },
                leftIcon: {
                  marginRight: 15,
                },
              })}
            >
              <Link to='/'>Logout</Link>
            </Button>
          ) : (
            <Button
              className='header__group__nav__signup'
              size='md'
              styles={(theme) => ({
                root: {
                  '&:hover': {
                    backgroundColor: theme.fn.darken('#678983', 0.05),
                    color: '#E6DDC4',
                  },
                },
                leftIcon: {
                  marginRight: 15,
                },
              })}
            >
              <Link to='/login'>Login</Link>
            </Button>
          )}
        </Group>
        <Burger
          className='header__group__burger'
          color='#E6DDC4'
          opened={opened}
          onClick={() => dispatch(setOpened())}
          title={title}
        />

        <SegmentedControl
          className={`header__group__mobileMenu ${menuClass} `}
          orientation='vertical'
          transitionDuration={500}
          transitionTimingFunction='linear'
          data={[
            {
              value: 'dashboard',
              label: (
                <Center>
                  <Box>
                    <Anchor href='/'>Dashboard</Anchor>
                  </Box>
                </Center>
              ),
            },
            {
              value: 'tasks',
              label: (
                <Center>
                  <Box>
                    <Link to={'/tasks'}>Tasks</Link>
                  </Box>
                </Center>
              ),
            },
            {
              value: 'explore',
              label: (
                <Center>
                  <Box>
                    <Anchor>
                      <Link to={'/explore'}>Explore</Link>
                    </Anchor>
                  </Box>
                </Center>
              ),
            },
          ]}
        />
      </Group>
    </Header>
  );
};
export default HeaderComponent;
