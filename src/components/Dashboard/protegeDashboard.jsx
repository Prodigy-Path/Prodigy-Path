/** @format */

import { Avatar, Paper, Text } from '@mantine/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostProtege } from '../store/mentorProtegePostsSlice';
import { getPost } from '../store/postSlice';
const ProtegeDashboard = () => {
  const { usersConnections } = useSelector((state) => state.login);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  let mentorMap = usersConnections.map((m) => m.mentor);
  let protegeFilteredPost = posts.filter((item) =>
    mentorMap.includes(item.user),
  );
  let sortedFilteredProtege = protegeFilteredPost.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  useEffect(() => {
    dispatch(
      getPostProtege({
        action: 'getMentorProtegePost',
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getPost({ action: 'getPost' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Text className="new_post_component">Articles from your mentors:</Text>
      {sortedFilteredProtege.map((d) => (
        <div key={crypto.randomUUID()}>
    <Paper radius='lg' className='dashCard' withBorder p='md'>

            <Avatar
                className='dashCard__avatar'
                src={'https://via.placeholder.com/150'}
                size={120}
                radius={20}
              />
            <Text className='dashCard__title' withBorder>{d.title}</Text>
              <Text className='dashCard__name'>{d.userName}</Text>
            <Text className='dashCard__content'>
              {d.text.includes('http') ? (
                <>
                  {d.text.split('http')[0]}
                  <a
                    href={'http' + d.text.split('http')[1].split(' ')[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'http' + d.text.split('http')[1].split(' ')[0]}
                  </a>{' '}
                  {d.text.split('http')[1].split(' ').slice(1).join(' ')}
                </>
              ) : (
                d.text
              )}
            </Text>
            </Paper>
        </div>
      ))}
    </>
  );
};
export default ProtegeDashboard;
