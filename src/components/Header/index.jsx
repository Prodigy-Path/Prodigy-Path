/** @format */
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Header,
  Group,
  Tabs,
  Button,
  Burger,
  Stack
} from '@mantine/core';
import { IconChecklist, IconHome, IconLogout, IconSearch, IconUserCircle } from '@tabler/icons';
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
    <Header
      height={75}
      fixed={true}
      className="header"
    >
      <Group
        position="apart"
        className="header__group"
      >
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          to={'/'}
          className="header__group__title"
        >
          ProdigyPath
        </Link>
        <Group
          position="right"
          className="header__group__nav"
        >
          {isLoggedIn ? (

            <Tabs className={`header__group__nav__segment`}>
              <Tabs.List>
                <Tabs.Tab color="teal" value='dashboard' icon={<IconHome size={20} />} onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                }}>
                  Dashboard
                </Tabs.Tab>
                <Tabs.Tab color="lime" icon={<IconChecklist size={20} />} value='tasks' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/tasks');
                }}>
                  Tasks
                </Tabs.Tab>
                <Tabs.Tab icon={<IconSearch size={20} />} color="orange" value='explore' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/explore');
                }}>
                  Explore
                </Tabs.Tab>
                <Tabs.Tab icon={<IconUserCircle size={20} />} color="pink" value='profile' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/profile');
                }}>
                  Profile
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>

          ) : null}
          {isLoggedIn ? (
            <Burger
              className="header__group__burger"
              color="#E6DDC4"
              opened={opened}
              onClick={() => dispatch(setOpened())}
              title={title}
            />
          ) : null}
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              className="header__group__nav__signup"
              size="md"
              styles={(theme) => ({
                root: {
                  '&:hover': {
                    backgroundColor: theme.fn.darken('#678983', 0.05),
                    color: '#E6DDC4',
                  },
                },
                leftIcon: {
                  marginRight: 19,
                },
              })}
            >

              
              <Link to='/'>Logout <IconLogout size={14} /></Link>

            </Button>
          ) : null}
        </Group>
        {isLoggedIn ? (

          <Tabs className={`header__group__mobileMenu ${menuClass}`}>
            <Tabs.List>
              <Stack>
                <Tabs.Tab color="teal" value='dashboard' icon={<IconHome size={20} />} onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/');
                }}>
                  Dashboard
                </Tabs.Tab>
                <Tabs.Tab color="lime" icon={<IconChecklist size={20} />} value='tasks' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/tasks');
                }}>
                  Tasks
                </Tabs.Tab>
                <Tabs.Tab icon={<IconSearch size={20} />} color="orange" value='explore' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/explore');
                }}>
                  Explore
                </Tabs.Tab>
                <Tabs.Tab icon={<IconUserCircle size={20} />} color="pink" value='profile' onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/profile');
                }}>
                  Profile
                </Tabs.Tab>
                <Tabs.Tab icon={<IconLogout size={20} />} color="pink" value='logout' onClick={handleLogout}>
                  Logout
                </Tabs.Tab>
              </Stack>
            </Tabs.List>
          </Tabs>

        ) : null}
      </Group>
    </Header>
  );
};
export default HeaderComponent;
