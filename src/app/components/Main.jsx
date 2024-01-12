import React from 'react'
import Chatlist from './Chatlist'
import Empty from './Empty'

const Main = () => {
  return (
    <>
      <div
        className='grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden'
      >
        <Chatlist />
        <Empty />
      </div>
    </>
  )
}

export default Main