/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Group, Text, SegmentedControl, Button, Burger } from '@mantine/core';
// import { AuthContext } from '../../context/Auth';

const HeaderComponent = () => {
  const [value, setValue] = useState('dashboard');
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const [menuClass, setClass] = useState('closed')

  useEffect(() => {
    if(opened){
      setClass('open')
    }else {
      setClass('closed')
    }
  }, [opened])

  return (
    <Header height={75} fixed={true} className='header' >
      <Group position='apart' className='header__group'>
        <Text className='header__group__title'>ProdigyPath</Text>
        <Group position='apart' className='header__group__nav'>
          <SegmentedControl
            className='header__group__nav__segment'
            transitionDuration={500}
            transitionTimingFunction="linear"
            data={[
              { label: 'Dashboard', value: 'dashboard' },
              { label: 'Tasks', value: 'tasks' },
              { label: 'Explore', value: 'Explore' },
            ]} />
          <Button
            className='header__group__nav__signup'
            size="md"
            styles={(theme) => ({
              root: {
                '&:hover': {
                  backgroundColor: theme.fn.darken('#678983', 0.05),
                  color: '#E6DDC4'
                },
              },
              leftIcon: {
                marginRight: 15,
              },
            })}>
            Sign up
          </Button>
        </Group>
        <Burger 
          className='header__group__burger'
          color='#E6DDC4'
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
        <SegmentedControl
            className={`header__group__mobileMenu ${menuClass} `}
            orientation='vertical'
            transitionDuration={500}
            transitionTimingFunction="linear"
            data={[
              { label: 'Dashboard', value: 'dashboard' },
              { label: 'Tasks', value: 'tasks' },
              { label: 'Explore', value: 'Explore' },
            ]} />
      </Group>
    </Header>
  );
};
export default HeaderComponent;
