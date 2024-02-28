import React from 'react'
import Avatar from './Avatar'

const ChatListItem = ({data, isContactPage = false}) => { // if isContactPage is not provided then by default we will consider that this component is for main chat page
  return (
    <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`}>
        <div className='min-w-fit px-5 pt-3'>
            <Avatar type={"lg"} image={data?.profilePic}/>
        </div>
        <div className="min-h-full flex flex-col justify-center mt-3 pr-2">
            <div className='flex justify-between'>
                <div className='text-white'>
                    <span>{data.name}</span>
                </div>
            </div>
            <div className='flex border-b border-conversation-border pb-2'>

            </div>
        </div>
    </div>
  )
}

export default ChatListItem