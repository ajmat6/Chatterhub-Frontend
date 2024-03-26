import React from 'react'
import Avatar from './Avatar'
import { useDispatch, useSelector } from 'react-redux'
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from 'react-icons/bs'
import { setAllContactsPage } from '../redux/reducers/authReducer'
const ChatlistHeader = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const getAllContactsPage = () => {
        dispatch(setAllContactsPage());
    }
    
  return (
    <div className='h-16 px-4 py-3 flex justify-between items-center'>
        <div className='curson-pointer'>
            {/* to do: handle images */}
            <Avatar type={'sm'} image={auth.userInfo?.profileImage}/> 
        </div>
        <div className='flex gap-6'>
            <BsFillChatLeftTextFill 
                className='text-panel-header-icon cursor-pointer text-xl'
                title='New chat' 
                onClick={getAllContactsPage}
            />
            <>
                <BsThreeDotsVertical 
                    className='text-panel-header-icon cursor-pointer text-xl'
                    title='Menu'
                />
            </>
        </div>
    </div>
  )
}

export default ChatlistHeader