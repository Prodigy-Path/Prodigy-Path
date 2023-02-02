import React from 'react';
import { Avatar, Text, Button, Paper, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
const dashBoardCard = () => {
  return (
    <>
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
          </Group>
          <div className='userCard__tagGroup'>
            {cardUser.tags?.map((tag, idx) => (
              <div key={`tag_${tag}_${idx}`} className='userCard__tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </>
  );
};
