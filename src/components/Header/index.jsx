/** @format */

import React from 'react';
import { setOpened } from '../store/drawerSlice';
import { login, logout } from '../store/loginSlice';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Group,
  Button,
  AppShell,
  Burger,
  Header,
  Footer,
  Text,
} from '@mantine/core';
import useStyles from '../componentStyling/mantineStyles';
import { useDispatch, useSelector } from 'react-redux';

// import { AuthContext } from '../../context/Auth';
const AppShellMain = () => {
  const { drawer, login } = useSelector((state) => state);
  const { opened } = drawer; //! Initial state is currently false
  const { isLoggedIn } = login; //! Initial state is currently true
  const dispatch = useDispatch();
  // let { isLoggedIn, login, logout } = useContext(AuthContext);
  // only temporary
  console.log(opened);
  const { classes } = useStyles();

  const linkStyle = {
    color: '#F8F9FA',
    textDecoration: 'none',
  };
  return (
    <>
      <AppShell
        navbar={
          <Header
            onClick={() => dispatch(setOpened())} //TODO This onClick will need moved to the "hamburger button"
            className={classes.navbar}
            fixed={false}
            position="apart"
            height={1}
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Group position="apart">
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to="/"
                  default
                >
                  ProdigyPath
                </Link>
              </Group>
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to="/"
                  default
                >
                  Dashboard
                </Link>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to="/"
                  default
                >
                  Tasks
                </Link>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to="/"
                  default
                >
                  Explore
                </Link>
              </Group>
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to="/"
                  default
                >
                  Profile
                </Link>
              </Group>
            </Group>
          </Header>
        }
      ></AppShell>
    </>
  );
};
export default AppShellMain;
