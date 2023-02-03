import {
  Button,
  Card,
  Group,
  Text,
  Textarea,
  TextInput,
  Paper,
  Avatar,
  Modal,
  Stack,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  post,
  getPost,
  deletePost,
  setIsEditing,
  updatePost,
  resetIsEditing,
} from '../store/postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const MentorDashboard = () => {
  const { user } = useSelector((state) => state.login);
  const { posts, isEditing } = useSelector((state) => state.post);
  const [opened, setOpened] = useState(false);
  console.log(posts);
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
  const handleDelete = (_id) => {
    dispatch(deletePost({ _id, action: 'deletePost' }));
  };
  const startEditing = (_id) => {
    console.log(_id);
    setOpened(true);
    dispatch(setIsEditing({ _id }));
  };
  const cancelUpdate = () => {
    setOpened(false);
    dispatch(resetIsEditing());
  };
  const updateNewPost = (e) => {
    console.log(e);
    console.log(e.target.updateText.value, e.target.updateTitle.value);
    e.preventDefault();
    dispatch(
      updatePost({
        action: 'updatePost',
        user: user._id,
        userName: user.username,
        text: e.target.updateText.value,
        title: e.target.updateTitle.value,
        token: user.token,
      }),
    );
    setOpened(false);
    dispatch(resetIsEditing());
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
          <h4 className='dashModal__heading'>
            Publish a new article to your protégé's dashboards
          </h4>
          <Card withBorder p={0} mb={10}>
            <TextInput placeholder='Subject' name='title' />
            <Textarea placeholder='Body...' name='text' radius={0} />
          </Card>
          <Button type='submit' m={0}>
            Post
          </Button>
        </Group>
      </form>
      {isEditing ? (
        <Modal
          className='dashModal'
          opened={opened}
          onClose={() => setOpened(false)}
          withCloseButton={false}
          closeOnEscape={false}
          closeOnClickOutside={false}
        >
          <form onSubmit={updateNewPost} className='dashModal__editForm'>
            <Group mr={0} position='together' className='dashModal__group'>
              <h4 className='dashModal__heading'>Edit Post</h4>
              <TextInput
                className='dashModal__editFormInput'
                placeholder='Subject'
                name='updateTitle'
              />
              <Textarea
                className='dashModal__editFormInput'
                placeholder='Body...'
                name='updateText'
                radius={0}
              />
              <Button className='dashModal__check' onClick={cancelUpdate}>
                {/* cancel update button */}
                <FontAwesomeIcon
                  className='tasks_icon trash'
                  icon={faTrashCan}
                />
              </Button>
              <Button className='dashModal__delete' type='submit'>
                {/* post update button */}
                <FontAwesomeIcon className='tasks_icon trash' icon={faCheck} />
              </Button>
            </Group>
          </form>
        </Modal>
      ) : (
        sortedFiltered.map((d, idx) => (
          <div key={idx}>
            <Paper radius='lg' className='dashCard' withBorder p='md'>
              <Avatar
                className='dashCard__avatar'
                src={'https://via.placeholder.com/150'}
                size={120}
                radius={20}
              />
              <Button
                className='dashCard__delete'
                onClick={() => handleDelete(d._id)}
              >
                <FontAwesomeIcon
                  className='tasks_icon trash'
                  icon={faTrashCan}
                />
              </Button>
              <Button
                className='dashCard__edit'
                onClick={() => startEditing(d._id)}
              >
                <FontAwesomeIcon className='tasks_icon pen' icon={faPen} />
              </Button>
              <Text className='dashCard__title'>{d.title}</Text>
              <Text className='dashCard__name'>@{user.username}</Text>
              <Text className='dashCard__content'>
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
              </Text>
            </Paper>
          </div>
        ))
      )}
      {sortedFiltered.length > 0 ? null : (
        <Text className='new_post_component'>No posts to show yet.</Text>
      )}
    </>
  );
};
export default MentorDashboard;
