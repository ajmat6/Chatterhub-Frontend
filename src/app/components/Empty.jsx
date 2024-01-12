import Image from 'next/image'
import React from 'react'

const Empty = () => {
  return (
    <div>
        <Image src={'/whatsapp.gif'} alt='chatterhub' height={300} width={300} className='border-conversation-border border-1 w-full  bg-panel-header-background flex flex-col h-[100vh] border-b-4 border-b-icon-green items-center justify-center'/>
    </div>
  )
}

export default Empty