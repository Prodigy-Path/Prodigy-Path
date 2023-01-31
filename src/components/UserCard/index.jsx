import React from 'react'
import { Avatar, Text, Button, Paper, Group } from '@mantine/core';

const UserCard = (props) => {
  const { user } = props;

  return (
    <Paper
      radius="lg"
      className='userCard'
      withBorder
      p="md"
    >
      <Avatar
        className='userCard__avatar'
        src={'https://via.placeholder.com/150'}
        size={120}
        radius={20} />
      <div className='userCard__content'>
        <Group className='userCard__content' position='apart'>
          <div>
            <Text size="lg" weight={500} mt="md" className='userCard__name'>
              {user.name}
            </Text>
            <Text  color="dimmed" size="sm" className='userCard__username'>
              @{user.username}
            </Text>
          </div>
          <Button className='userCard__button'>
            Connect
          </Button>
        </Group>
        <div className='userCard__tagGroup'>
          {user.tags.map(tag => (
            <div className='userCard__tag'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Paper>
  )
}

export default UserCard
