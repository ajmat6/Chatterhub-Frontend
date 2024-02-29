import React from 'react'
import Avatar from './Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentChatUser, setAllContactsPage } from '../redux/reducers/authReducer'

const ChatListItem = ({data, isContactPage = false}) => { // if isContactPage is not provided then by default we will consider that this component is for main chat page
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const handleContactClick = () => {
        // if contact clicked is already the user whose chat is opened:
        // if(auth.currentChatUser._id === data?._id) return;
        console.log(data)
        dispatch(changeCurrentChatUser(data));
        dispatch(setAllContactsPage()); // closing contacts page
    }

  return (
    <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`} onClick={handleContactClick}>
        <div className='min-w-fit px-5 pt-3'>
            <Avatar type={"lg"} image={data?.profilePic}/>
        </div>
        <div className="min-h-full flex flex-col justify-center mt-3 pr-2">
            <div className='flex justify-between'>
                <div className='text-white'>
                    <span>{data.name}</span>
                </div>
            </div>
            <div className='flex border-b border-conversation-border pb-2 pt-1 pr-2'>
                <div className='flex justify-between w-full '>
                    <span className='text-secondary line-clamp-1 text-sm'>{data?.about || "\u00A0"}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatListItem