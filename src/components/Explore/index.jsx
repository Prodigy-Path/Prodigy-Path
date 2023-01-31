import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setParams, setResults, setPage} from '../store/exploreSlice';
import { TextInput, ActionIcon, useMantineTheme, Pagination } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import UserCard from '../UserCard';

const Explore = () => {

  const dispatch = useDispatch();
  const { searchParam, results, currentPage } = useSelector((state) => state.explore)
  const { user } = useSelector((state) => state.login);

  const theme = useMantineTheme();
  const searchTerm = user.role === 'mentor' ? 'Protege' : 'Mentor'
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

  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5
  const showResults = results.slice(startIndex, endIndex)

  const setCurrentPage = (page) => {
    dispatch(
      setPage({
        action: 'pageChange',
        page
      })
    )
  }



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
            placeholder={`Search for a new ${searchTerm}`}
            rightSectionWidth={42}
          />
        </section>
        <section className='explore__results'>
          {showResults.map((user, idx) => (
            <UserCard cardUser={user} key={idx} />
          ))}
        </section>
        <Pagination page={currentPage} onChange={(page) => setCurrentPage(page)} total={Math.ceil(results.length / 5)} />
      </div>
    </>
  )
}

export default Explore