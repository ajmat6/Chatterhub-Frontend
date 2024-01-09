'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Input from '../components/input'
import defaultAvatar from '../../../public/default_avatar.png'
import Avatar from '../components/Avatar'

const onboarding = () => {
  const auth = useSelector((state) => state.auth)
  const [personName, setPersonName] = useState(auth.userInfo.name ? auth.userInfo.name : "")
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(defaultAvatar)
  return (
    <div className='bg-panel-header-background  h-screen w-screen text-white flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-2'>
        <Image src='/whatsapp.gif' alt='chatterhub' height={300} width={300}/>
        <span className='text-7xl '>Chatterhub</span>
      </div>
      <h2 className="text-2xl">Create your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input name={"Display Name"} state={personName} setState={setPersonName} label={true}/>
          <Input name={"About"} state={about} setState={setAbout} label={true}/>
        </div>
        <div>
          <Avatar type={'xl'} image={image} setImage={setImage}/>
        </div>
      </div>
    </div>
  )
}

export default onboarding