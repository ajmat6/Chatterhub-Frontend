import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTime } from '../utils/calculateTime';
import MessageStatus from './MessageStatus';

const ChatContainer = () => {
  // getting all the messages:
  const disptach = useDispatch();
  const mess = useSelector((state) => state.message);
  const auth = useSelector((state) => state.auth);
  console.log(mess, "mess")
  return (
    <div className='h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar'>
        <div className='bg-chat-background bg-fixed h-full w-full opacity-5 fixed top-0 left-0 z-0'></div>
        <div className='mx-6 my-6 relative bottom-0 left-0 z-40'>
          <div className='flex w-full'>
              <div className='flex flex-col justify-end w-full gap-1 overflow-auto'>
                {
                  mess.messages.map((mes, index) => 
                    <div className={`flex ${mes.senderId === auth.currentChatUser?._id ? "justify-start" : "justify-end"}`}>
                      {mes.type === 'text' && (
                        <div className={`text-white px-2 py-[5px] text-sm rounded-md flex gap-2  max-w-[45%] ${mes.senderId === auth.currentChatUser?._id ? "bg-incoming-background" : "bg-outgoing-background"}`}>
                          <span className='break-all'>{mes.message}</span>
                          <div className='flex gap-1 items-end'>
                            <span className='text-bubble-meta text-[11px] pt-1 min-w-fit'>{calculateTime(mes.createdAt)}</span>
                            <span>
                              {
                                mes.senderId === auth.userInfo?._id && <MessageStatus messageStatus={mes.messageStatus}/>
                              }
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }
              </div>
          </div>
        </div>
    </div>
  )
}

export default ChatContainer