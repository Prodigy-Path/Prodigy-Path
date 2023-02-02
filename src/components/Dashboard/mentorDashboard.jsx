import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { post, getPost } from '../store/postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const MentorDashboard = () => {
  const { user } = useSelector((state) => state.login);
  const { posts } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      post({
        action: 'newPost',
        user: user._id,
        userName: user.username,
        text: e.target.text.value,
        title: e.target.title.value,
        token: user.token,
      }),
    );
    e.target.title.value = '';
    e.target.text.value = '';
  };

  useEffect(() => {
    dispatch(getPost({ action: 'getPost' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);
  let filtered = posts.filter((element) => element.user === user._id);
  let sortedFiltered = filtered.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <>
      <form onSubmit={handleSubmit} className='new_post_component'>
        <Group mr={0} position='together'>
          <h4>Publish a new article to your protégé's dashboards</h4>
          <Card withBorder p={0} mb={10}>
            <TextInput
              placeholder='Subject'
              name='title'
              variant='unstyled'
            />
            <Textarea placeholder='Body...' name='text' radius={0} />
          </Card>
          <Button type='submit' m={0}>
            Post
          </Button>
        </Group>
      </form>
      {sortedFiltered.map((d, idx) => (
        <div key={idx}>
          <Card withBorder>
            <Group position='together'>
              <Image
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                height={30}
                width={30}
                p={0}
              />
              <Text>{user.username}</Text>
            </Group>
            <Card.Section withBorder>{d.title}</Card.Section>
            <Card.Section>
              {d.text.includes('http') ? (
                <>
                  {d.text.split('http')[0]}
                  <a
                    href={'http' + d.text.split('http')[1].split(' ')[0]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {'http' + d.text.split('http')[1].split(' ')[0]}
                  </a>{' '}
                  {d.text.split('http')[1].split(' ').slice(1).join(' ')}
                </>
              ) : (
                d.text
              )}
            </Card.Section>
          </Card>
        </div>
      ))} {sortedFiltered.length > 0 ? null : <Text className='new_post_component'>No posts to show yet.</Text>}
    </>
  )
}
export default MentorDashboard;