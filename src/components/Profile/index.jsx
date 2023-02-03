import React, { useEffect, useState } from 'react'
import { Avatar, Text, Button, Paper, Group, MultiSelect, Textarea } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';
import { getConnectionRequests, processConnectionRequest } from '../store/loginSlice';
import { Table, ScrollArea } from '@mantine/core';
import { updateUser } from '../store/loginSlice';

const Profile = () => {

  const { user, userConnectionsUsers, connectionRequestUsers } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    description: user.description,
  });
  const [newTags, setTags] = useState(user.tags)

  const changeTags = (value) => {
    console.log(value)
    setTags(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        action: 'UPDATE_USER',
        tags: newTags,
        description: formData
      })
    )
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    dispatch(
      getConnectionRequests(
        { action: 'CONNECTION_REQUEST' }
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleRequest = (action, connection) => {
    dispatch(
      processConnectionRequest({
        action,
        connection
      })
    )
  }


  const data = [
    { value: 'Git', label: 'Git', group: 'JavaScript' },
    { value: 'GitHub', label: 'GitHub', group: 'JavaScript' },
    { value: 'React', label: 'React', group: 'JavaScript' },
    { value: 'React-Native', label: 'React-Native', group: 'JavaScript' },
    { value: 'JavaScript', label: 'JavaScript', group: 'JavaScript' },
    { value: 'CSS', label: 'CSS', group: 'JavaScript' },
    { value: 'HTML', label: 'HTML', group: 'JavaScript' },
    { value: 'SCSS', label: 'SCSS', group: 'JavaScript' },
    { value: 'Web Development', label: 'Web Development', group: 'JavaScript' },
    { value: 'Front-End', label: 'Front-End', group: 'JavaScript' },
    { value: 'ECMAScript', label: 'ECMAScript', group: 'JavaScript' },
    {
      value: 'JavaScript Libraries',
      label: 'JavaScript Libraries',
      group: 'JavaScript',
    },
    { value: 'jQuery', label: 'jQuery', group: 'JavaScript' },
    { value: 'Angular', label: 'Angular', group: 'JavaScript' },
    { value: 'Vue.js', label: 'Vue.js', group: 'JavaScript' },
    { value: 'Node.js', label: 'Node.js', group: 'JavaScript' },
    { value: 'UI', label: 'UI', group: 'JavaScript' },
    { value: 'UX', label: 'UX', group: 'JavaScript' },
    {
      value: 'Web Applications',
      label: 'Web Applications',
      group: 'JavaScript',
    },
    {
      value: 'Single-Page Applications (SPAs)',
      label: 'Single-Page Applications (SPAs)',
      group: 'JavaScript',
    },
    { value: 'AJAX', label: 'AJAX', group: 'JavaScript' },
    { value: 'JSON', label: 'JSON', group: 'JavaScript' },
    { value: 'Asynchronous', label: 'Asynchronous', group: 'JavaScript' },
    {
      value: 'Object-Oriented Programming',
      label: 'Object-Oriented Programming',
      group: 'JavaScript',
    },
    {
      value: 'Event-Driven Programming',
      label: 'Event-Driven Programming',
      group: 'JavaScript',
    },
    {
      value: 'DOM Manipulation',
      label: 'DOM Manipulation',
      group: 'JavaScript',
    },
    { value: 'REST APIs', label: 'REST APIs', group: 'JavaScript' },
    { value: 'npm', label: 'npm', group: 'JavaScript' },
    { value: 'CLI', label: 'CLI', group: 'JavaScript' },
    { value: 'Webpack', label: 'Webpack', group: 'JavaScript' },
    { value: 'Python', label: 'Python', group: 'Python' },
    { value: 'Azure', label: 'Azure', group: 'Python' },
    { value: 'Django', label: 'Django', group: 'Python' },
    { value: 'Numpy', label: 'Numpy', group: 'Python' },
    { value: 'Machine Learning', label: 'Machine Learning', group: 'Python' },
    { value: 'Pandas', label: 'Pandas', group: 'Python' },
    { value: 'Scikit-learn', label: 'Scikit-learn', group: 'Python' },
    { value: 'Jupyter Notebooks', label: 'Jupyter Notebooks', group: 'Python' },
    { value: 'Keras', label: 'Keras', group: 'Python' },
    { value: 'PyTorch', label: 'PyTorch', group: 'Python' },
    { value: 'PyCharm', label: 'PyCharm', group: 'Python' },
  ];


  const rows = userConnectionsUsers.map((user) => (
    <tr key={user._id}>
      <td className='profile__friends__name'>
        <Group spacing="sm">
          <Avatar size={40} src={'https://via.placeholder.com/150'} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
            <Text size="sm" color='dimmed' weight={500}>
              @{user.username}
            </Text>
          </div>
        </Group>
      </td>
      {user.email ?
        <td>
          <Text size="sm">{user.email}</Text>
          <Text size="xs" color="dimmed">
            Email
          </Text>
        </td>
        : null
      }
      <td>
        <Text size="sm">{user.role}</Text>
        <Text size="xs" color="dimmed">
          role
        </Text>
      </td>
      <td>
        <Button onClick={() => handleRequest('DELETE', user)}> Remove </Button>
      </td>
    </tr>
  ));

  console.log(user)

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
                {user?.name}
              </Text>
              <Text color="dimmed" size="sm" className='profile__username'>
                @{user?.username}
              </Text>
              <Text size="sm" className='profile__role'>
                {user?.role}
              </Text>
            </div>
            {!editMode ?
              <Button className='profile__button' size='md' onClick={() => setEditMode(true)}>
                Edit
              </Button> :
              <Button className='profile__button' size='md' onClick={handleSubmit}>
                Submit
              </Button>}
          </Group>
          {!editMode ?
            <div className='profile__tagGroup'>
              Tags:
              {user.tags?.map(tag => (
                <div className='profile__tag'>
                  {tag}
                </div>
              ))}
            </div> :
            <MultiSelect
              data={data}
              placeholder='Pick any tags you would like to use to find mentors'
              name='Multiselect'
              label='Tags'
              searchable
              defaultValue={user?.tags}
              onChange={(value) => changeTags(value)}
              nothingFound='Nothing found'
              clearButtonLabel='Clear selection'
              clearable
            />}
        </div>
        <Tabs radius="md" variant='outline' defaultValue="description" className='profile__tabs'>
          <Tabs.List grow>
            <Tabs.Tab value="description" icon={<IconPhoto size={14} />}>Description</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>Connections</Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>Pending Connections</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="description" pl="xs" className='profile__descriptionTab'>
            {!editMode ? 
              <Textarea
                label="User Description"
                className='profile__textarea'
                variant="filled"
                radius="md"
                size="lg"
                value={user.description}
                disabled
              /> 
              :
              <Textarea
                placeholder="Description"
                className='profile__textarea'
                label="User Description"
                variant="filled"
                radius="md"
                size="lg"
                name='description'
                onChange={(e) => handleChange(e)}
                defaultValue={user?.description}
              />
            }
          </Tabs.Panel>

          <Tabs.Panel value="messages" pl="xs" className='profile__friends'>
            <ScrollArea className='profile__scrollArea'>
              <Table sx={{ minWidth: 200 }} verticalSpacing="sm" className='profile__friends__table'>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="settings" pl="xs" className='profile__request'>
            <ScrollArea className='profile__scrollArea'>
              <Table sx={{ minWidth: 200 }} verticalSpacing="sm" className='profile__request__table'>
                <tbody>
                  {connectionRequestUsers.map(user => (
                    <tr key={user._id} className={user._id}>
                      <td className='profile__request__name'>
                        <Text size="lg" weight={500}>
                          {user?.name}
                        </Text>
                        <Text color="dimmed" size="sm">
                          @{user?.username}
                        </Text>
                      </td>
                      <td className='profile__request__buttons'>
                        <Button onClick={() => handleRequest('ACCEPT', user)}>Accept</Button>
                        <Button onClick={() => handleRequest('DECLINE', user)}>Decline</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </div>
  )
}

export default Profile
