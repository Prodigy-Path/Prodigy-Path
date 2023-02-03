import React, { useState } from 'react';

import { Avatar, Text, Button, Paper, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { newConnection } from '../store/exploreSlice';

const UserCard = (props) => {
  const { cardUser } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [pending, setPending] = useState(false);

  let addNewConnection = (e) => {
    dispatch(
      newConnection({
        action: 'connection',
        user: cardUser,
        connection_requests: cardUser.connection_requests,
        newConnection: user._id,

        token: user.token,
      }),
    );
    setPending(true);
  };

  return (
    <Paper radius='lg' className='userCard' withBorder p='md'>
      <Avatar
        className='userCard__avatar'
        src={'https://via.placeholder.com/150'}
        size={120}
        radius={20}
      />
      <div className='userCard__content'>
        <Group className='userCard__content' position='apart'>
          <div>
            <Text size='lg' weight={500} mt='md' className='userCard__name'>
              {cardUser.name}
            </Text>
            <Text color='dimmed' size='sm' className='userCard__username'>
              @{cardUser.username}
            </Text>
          </div>
          {cardUser.connection_requests?.includes(user._id) ||
          pending === true ? (
            <Button className='userCard__button'>Pending</Button>
          ) : (
            <Button className='userCard__button' onClick={addNewConnection}>
              Connect
            </Button>
          )}
        </Group>
        <div className='userCard__tagGroup'>
          {cardUser.tags?.map((tag, idx) => (
            <div key={crypto.randomUUID()} className='userCard__tag'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default UserCard;
