import axios from 'axios'
import React, { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import {ImAttachment} from 'react-icons/im'
import { MdSend } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MESSAGE_ROUTE } from '../utils/urlConfig'

const MessageBar = () => {
    const dipatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // const currUser = auth.currentChatUser;
    const [message, setMessage] = useState("");
    const sendMessage = async () => {
        console.log(auth)
        console.log("HIi")
        try {
            const res = await axios.post(ADD_MESSAGE_ROUTE, {
                from: auth.userInfo._id,
                to: auth.currentChatUser._id, 
                message
            });
            console.log(res);
        }
        catch(err) {
            console.log(err);
        }
        setMessage('')
    }

  return (
    <div className='bg-panel-header-background h-20 px-4 flex items-center gap-6 relative'>
        <>
            <div className='flex gap-6'>
                <BsEmojiSmile className='text-panel-header-icon cursor-pointer text-xl' title='Emojis'/>
                <ImAttachment className='text-panel-header-icon cursor-pointer text-xl' title='Attach File'/>
            </div>
            <div className='w-full rounded-lg h-10 flex items-center'>
                <input type="text" placeholder='Type a message' className='bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full' onChange={(e) => setMessage(e.target.value)} value={message}/>
            </div>
            <div>
                <button className='flex items-center justify-center gap-2'>
                    <MdSend className='text-panel-header-icon cursor-pointer text-xl' title='Send Message' onClick={sendMessage}/>
                    {/* <FaMicrophone className='text-panel-header-icon cursor-pointer text-xl' title='Record Message'/> */}
                </button>
            </div>
        </>
    </div>
  )
}

export default MessageBar