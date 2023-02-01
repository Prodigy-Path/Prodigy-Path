import React from 'react'
import { Avatar, Text, Button, Paper, Group } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';

const Profile = (props) => {

  const { user } = useSelector((state) => state.login);

  const tags = ['asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf']

  return (
    <div className='profileContainer'>
      <Paper
        radius="lg"
        className='profile'
        withBorder
        p="lg"
      >
        <div className='profile__content'>
          <Avatar
            className='profile__avatar'
            src={'https://via.placeholder.com/150'}
            size={220}
            radius={20} />
          <Group position='apart' className='profile__group'>
            <div>
              <Text size="lg" weight={500} mt="md" className='profile__name'>
                {user?.name} Seth Pierce
              </Text>
              <Text color="dimmed" size="sm" className='profile__username'>
                @{user?.username}sethppierce
              </Text>
              <Text size="sm" className='profile__role'>
                {user?.role}mentor
              </Text>
            </div>
            <Button className='profile__button' size='md'>
              Edit
            </Button>
          </Group>
          <div className='profile__tagGroup'>
            Tags:
            {tags.map(tag => (
              <div className='profile__tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <Tabs  radius="md" variant='outline' defaultValue="description" className='profile__tabs'>
          <Tabs.List  grow>
            <Tabs.Tab value="description" icon={<IconPhoto size={14} />}>Description</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>Connections</Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>Pending Connections</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="description" pl="xs">
            User description
          </Tabs.Panel>

          <Tabs.Panel value="messages" pl="xs">
            Users connection
          </Tabs.Panel>

          <Tabs.Panel value="settings" pl="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </div>
  )
}

export default Profile
