import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { post, getPost } from '../store/postSlice';
const Dashboard = () => {
  const { user } = useSelector((state) => state.login);
  const { posts } = useSelector((state) => state.post);
  console.log(posts);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log('hello?');
    e.preventDefault();
    dispatch(
      post({
        action: 'newPost',
        user: user._id,
        text: e.target.text.value,
        title: e.target.title.value,
        token: user.token,
      }),
    );
  };
  useEffect(() => {
    dispatch(getPost({ action: 'getPost' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);
  let savedPosts = dispatch(getPost({ action: 'getPost' }));
  console.log(savedPosts);
  console.log(posts);
  let filtered = posts.filter((element) => element.user === user._id);
  console.log(filtered);
  console.log(user.username);
  return (
    <>
      {user.role === 'mentor' ? (
        <>
          <form onSubmit={handleSubmit}>
            <Group mr={0} position='together'>
              <Card withBorder p={0} mb={10}>
                <TextInput
                  placeholder='Write a new post...'
                  name='title'
                  variant='unstyled'
                />
                <Textarea placeholder='description...' name='text' radius={0} />
              </Card>
              <Button type='submit' m={0}>
                Post
              </Button>
            </Group>
          </form>
          {filtered.map((d, idx) => (
            <div key={idx}>
              <Card
                style={{
                  width: '50%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '10px',
                  p: '0',
                }}
                withBorder
              >
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
                <Card.Section>{d.text}</Card.Section>
              </Card>
            </div>
          ))}
        </>
      ) : (
        <>
          <Group>
            <Card>
              <Card.Section>posts</Card.Section>
            </Card>
          </Group>
        </>
      )}
    </>
  );
};
export default Dashboard;
