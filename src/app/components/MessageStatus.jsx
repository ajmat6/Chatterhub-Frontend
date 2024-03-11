import React from 'react'
import { BsCheck, BsCheckAll } from 'react-icons/bs'

const MessageStatus = (props) => {
  return (
    <React.Fragment>
        {props.messageStatus === 'sent' && <BsCheck className='text-lg'/>}
        {props.messageStatus === 'delivered' && <BsCheckAll className='text-lg'/>}
        {props.messageStatus === 'read' && <BsCheckAll className='text-lg text-icon-ack'/>}
    </React.Fragment>
  )
}

export default MessageStatus