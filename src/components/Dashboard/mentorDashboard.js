import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Textarea,
  TextInput,
  Paper,
  Avatar
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { post, getPost, deletePost, setIsEditing, updatePost, setUpdatePostData, resetIsEditing } from '../store/postSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { render } from 'react-dom';
const MentorDashboard = () => {
  const { user } = useSelector((state) => state.login);
  const { posts,
    newTitle,
    newText,
    updateData,
    isEditing } = useSelector((state) => state.post);
  console.log(posts)
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
    dispatch(deletePost({ _id, action: 'deletePost' }))
  }
  const startEditing = (_id) => {
    console.log(_id)
    dispatch(setIsEditing({ _id }))
  }
  const cancelUpdate = () => {
    dispatch(resetIsEditing())
  }
  const updateNewPost = (e) => {
    console.log(e)
    e.preventDefault();
    dispatch(updatePost({
      action: 'updatePost',
      user: user._id,
      userName: user.username,
      text: e.target.text.value,
      title: e.target.title.value,
      token: user.token,
    }));
    dispatch(resetIsEditing())

  }
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

            />
            <Textarea placeholder='Body...' name='text' radius={0} />
          </Card>
          <Button type='submit' m={0}>
            Post
          </Button>

        </Group>
      </form>
      {
        isEditing ? <form onSubmit={updateNewPost} className='new_post_component'>
          <Group mr={0} position='together'>
            <h4>Edit Post</h4>
            <Card withBorder p={0} mb={10}>
              <TextInput
                placeholder='Subject'
                name='title'

              />
              <Textarea placeholder='Body...' name='text' radius={0} />
            </Card>
            <Button type='submit' m={0}>
              Post
            </Button>
            <Button onClick={cancelUpdate} m={0}>
              Cancel
            </Button>
          </Group>
        </form> :

          sortedFiltered.map((d, idx) => (
            <div key={idx}>
              <Paper radius='lg' className='dashCard' withBorder p='md'>
                <Avatar
                  className='dashCard__avatar'
                  src={'https://via.placeholder.com/150'}
                  size={120}
                  radius={20}
                />
                <Button className='dashCard__delete' onClick={() => handleDelete(d._id)}><FontAwesomeIcon
                  className="tasks_icon trash"
                  icon={faTrashCan}
                /></Button>
                <Button onClick={() => startEditing(d._id)}>Edit</Button>
                <Text className='dashCard__title' >{d.title}</Text>
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
      }{sortedFiltered.length > 0 ? null : <Text className='new_post_component'>No posts to show yet.</Text>}

    </>
  )
}
export default MentorDashboard;