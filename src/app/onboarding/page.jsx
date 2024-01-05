import Image from 'next/image'
import React from 'react'

const onboarding = () => {
  return (
    <div className='bg-panel-header-background  h-screen w-screen text-white flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-2'>
        <Image src='/whatsapp.gif' alt='chatterhub' height={300} width={300}/>
      </div>
    </div>
  )
}

export default onboarding