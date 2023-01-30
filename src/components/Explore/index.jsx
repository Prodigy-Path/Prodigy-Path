import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setResults } from '../store/exploreSlice';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import UserCard from '../UserCard';

const Explore = () => {

  const dispatch = useDispatch();
  const { searchParam, results } = useSelector((state) => state.explore)
  const { user } = useSelector((state) => state.login);

  const theme = useMantineTheme();

  const handleNewParam = (query) => {
    dispatch(
      setParams({
        action: 'setParams',
        query
      })
    )
  }

  const handleSearch = () => {
    dispatch(
      setResults({
        action: 'search',
        userRole: user.role
      })
    )
  }
  console.log(results)
  return (
    <>
      <div className='explore'>
        <section className='explore__search'>
          <TextInput
            icon={<IconSearch size={18} stroke={1.5} />}
            className='explore__textInput'
            radius="xl"
            size="md"
            value={searchParam}
            onChange={(e) => handleNewParam(e.target.value)}
            rightSection={
              <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={handleSearch}>
                {theme.dir === 'ltr' ? (
                  <IconArrowRight size={18} stroke={1.5} />
                ) : (
                  <IconArrowLeft size={18} stroke={1.5} />
                )}
              </ActionIcon>
            }
            placeholder="Search Tags"
            rightSectionWidth={42}
          />
        </section>
        <section className='explore__results'>
          {results.map((user, idx) => (
            <UserCard user={user} key={idx}/>
          ))}
        </section>
      </div>
    </>
  )
}

export default Explore