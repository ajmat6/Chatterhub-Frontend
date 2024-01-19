import React, { useEffect, useState } from 'react'
import ChatlistHeader from './ChatlistHeader'
import SearchBar from './SearchBar'
import List from './List'
import { useSelector } from 'react-redux'
import ContactsList from './ContactsList'

const Chatlist = () => {
  const auth = useSelector((state) => state.auth);

  const [pageType, setPageType] = useState('default');

  useEffect(() => {
    if(auth.contactsPage) setPageType('all-contacts')
    else setPageType('default');
  }, [auth.contactsPage])

  return (
    <div className='bg-panel-header-background flex flex-col max-h-screen z-20'>
      {
        pageType === 'default' ?
        <>
          <ChatlistHeader />
          <SearchBar />
          <List /> 
        </> :
        <>
        {/* <ChatlistHeader /> */}
         <ContactsList />
        </>
      }
    </div>
  )
}

export default Chatlist