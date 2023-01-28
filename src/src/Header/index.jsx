import React from 'react';
import { useState } from 'react';
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

// import { AuthContext } from '../../context/Auth';
const AppShellMain = () => {
  const [opened, setOpened] = useState(false);
  // let { isLoggedIn, login, logout } = useContext(AuthContext);
  // only temporary
  const { classes } = useStyles();
  let isLoggedIn = true;
  const linkStyle = {
    color: '#F8F9FA',
    textDecoration: 'none',
  };
  return (
    <>
      <AppShell
        navbar={
          <Header
            className={classes.navbar}
            fixed={false}
            position='apart'
            height={1}
            p='md'
            hiddenBreakpoint='sm'
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Group position='apart'>
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to='/'
                  default
                >
                  ProdigyPath
                </Link>
              </Group>
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to='/'
                  default
                >
                  Dashboard
                </Link>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to='/'
                  default
                >
                  Tasks
                </Link>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to='/'
                  default
                >
                  Explore
                </Link>
              </Group>
              <Group>
                <Link
                  style={linkStyle}
                  className={classes.navbarLink}
                  to='/'
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
