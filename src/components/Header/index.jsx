/** @format */

import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Header,
  Group,
  Text,
  SegmentedControl,
  Center,
  Box,
  Button,
  Burger,
} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { setOpened, setDrawer } from '../store/drawerSlice';

import { logout } from '../store/loginSlice';
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);
  const { opened, menuClass } = useSelector((state) => state.drawer);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const handleLogout = () => {
    dispatch(logout());
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setDrawer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);
  return (
    <Header height={75} fixed={true} className='header'>
      <Group position='apart' className='header__group'>
        <Text className='header__group__title'>ProdigyPath</Text>
        <Group position='right' className='header__group__nav'>
          <SegmentedControl
            className='header__group__nav__segment'
            transitionDuration={500}
            transitionTimingFunction='linear'
            data={[
              {
                value: 'dashboard',
                label: (
                  <Center>
                    <Box
                      onClick={() => {
                        navigate('/');
                      }}
                    >
                      Dashboard
                    </Box>
                  </Center>
                ),
              },
              {
                value: 'tasks',
                label: (
                  <Center>
                    <Box
                      onClick={() => {
                        navigate('/tasks');
                      }}
                    >
                      Tasks
                    </Box>
                  </Center>
                ),
              },
              {
                value: 'explore',
                label: (
                  <Center>
                    <Box
                      onClick={() => {
                        navigate('/explore');
                      }}
                    >
                      Explore
                    </Box>
                  </Center>
                ),
              },
            ]}
          />
          <Burger
            className='header__group__burger'
            color='#E6DDC4'
            opened={opened}
            onClick={() => dispatch(setOpened())}
            title={title}
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
                  <Box
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Dashboard
                  </Box>
                </Center>
              ),
            },
            {
              value: 'tasks',
              label: (
                <Center>
                  <Box
                    onClick={() => {
                      navigate('/tasks');
                    }}
                  >
                    Tasks
                  </Box>
                </Center>
              ),
            },
            {
              value: 'explore',
              label: (
                <Center>
                  <Box
                    onClick={() => {
                      navigate('/explore');
                    }}
                  >
                    Explore
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
