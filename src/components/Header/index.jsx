/** @format */
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Header,
  Group,
  SegmentedControl,
  Center,
  Box,
  Button,
  Burger,
} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { setOpened, setDrawer } from '../store/drawerSlice';
import Cookies from 'universal-cookie';
import { logout } from '../store/loginSlice';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { isLoggedIn } = useSelector((state) => state.login);
  const { opened, menuClass } = useSelector((state) => state.drawer);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const handleLogout = () => {
    cookies.remove('user');
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
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          to={'/'}
          className='header__group__title'
        >
          ProdigyPath
        </Link>
        <Group position='right' className='header__group__nav'>
          {isLoggedIn ? (
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
                          window.scrollTo({ top: 0, behavior: 'smooth' });
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
                          window.scrollTo({ top: 0, behavior: 'smooth' });
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
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          navigate('/explore');
                        }}
                      >
                        Explore
                      </Box>
                    </Center>
                  ),
                },
                {
                  value: 'Profile',
                  label: (
                    <Center>
                      <Box
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          navigate('/profile');
                        }}
                      >
                        Profile
                      </Box>
                    </Center>
                  ),
                },
              ]}
            />
          ) : null}
          {isLoggedIn ? (
            <Burger
              className='header__group__burger'
              color='#E6DDC4'
              opened={opened}
              onClick={() => dispatch(setOpened())}
              title={title}
            />
          ) : null}

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
          ) : null}
        </Group>
        {isLoggedIn ? (
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
              {
                value: 'logout',
                label: (
                  <Center>
                    <Box onClick={handleLogout}>Logout</Box>
                  </Center>
                ),
              },
            ]}
          />
        ) : null}
      </Group>
    </Header>
  );
};
export default HeaderComponent;
