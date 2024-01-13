import Image from 'next/image'
import React from 'react'

const Empty = () => {
  return (
    <div className='border-conversation-border w-full bg-panel-header-background border-l flex flex-col items-center justify-center h-[100vh] border-b-4 border-b-icon-green'>
        <Image src={'/whatsapp.gif'} alt='chatterhub' height={300} width={300}/>
    </div>
  )
}

export default Empty