import React from 'react'
import Avatar from './Avatar'
import {MdCall} from 'react-icons/md'
import { IoVideocam } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import img1 from '../../../public/avatars/1.png'
import { useDispatch, useSelector } from 'react-redux'

const ChatHeader = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className='h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10'>
        <div className='flex items-center justify-center gap-6'>
            <Avatar type={'sm'} image={auth.currentChatUser?.profilePic}/> 
            <div className='flex flex-col'>
                <span className='text-primary-strong'>{auth.currentChatUser.name}</span>
                <span className='text-secondary text-sm'>Online</span>
            </div>
        </div>
        <div className='flex gap-6'>
            <MdCall className='text-panel-header-icon cursor-pointer text-xl'/>
            <IoVideocam className='text-panel-header-icon cursor-pointer text-xl'/>
            <BiSearchAlt2 className='text-panel-header-icon cursor-pointer text-xl'/>
            <BsThreeDotsVertical className='text-panel-header-icon cursor-pointer text-xl'/>
        </div>
    </div>
  )
}

export default ChatHeader