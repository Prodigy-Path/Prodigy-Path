import React, { useEffect, useState } from 'react'
import { Avatar, Text, Button, Paper, Group, MultiSelect, Textarea, Card } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';
import { getConnectionRequests, processConnectionRequest } from '../store/loginSlice';
import { Table, ScrollArea } from '@mantine/core';
import { updateUser } from '../store/loginSlice';
import data from './data'
const Profile = () => {

  const { user, userConnectionsUsers, connectionRequestUsers } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    description: user.description,
  });
  const [newTags, setTags] = useState(user.tags)

  const changeTags = (value) => {

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


  return (
    <div className='profileContainer main'>
      <Paper
        radius="lg"
        className='profile'
        withBorder
        p="lg"
      >
        <Card className='profile__content'>
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
        </Card>
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
