import React from 'react'
import {IoClose} from 'react-icons/io5'

const PhotoLibrary = (props) => {
    const images = [
        "../../public/avatars/1.png",
        "../../public/avatars/2.png",
        "../../public/avatars/3.png",
        "../../public/avatars/4.png",
        "../../public/avatars/5.png",
        "../../public/avatars/6.png",
        "../../public/avatars/7.png",
        "../../public/avatars/8.png",
        "../../public/avatars/1.png",
    ]
    console.log(images)
  return (
    <div className='fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center'>
        <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-4">
            <div onClick={() => props.hidePhotoLibrary(false)}>
                <IoClose className='h-8 w-8 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default PhotoLibrary