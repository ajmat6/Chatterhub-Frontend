import React from 'react'
import {IoClose} from 'react-icons/io5'
import img1 from '../../../public/avatars/1.png'
import img2 from '../../../public/avatars/2.png'
import img3 from '../../../public/avatars/3.png'
import img4 from '../../../public/avatars/4.png'
import img5 from '../../../public/avatars/5.png'
import img6 from '../../../public/avatars/6.png'
import img7 from '../../../public/avatars/7.png'
import img8 from '../../../public/avatars/8.png'
import img9 from '../../../public/avatars/9.png'
import Image from 'next/image'

const PhotoLibrary = (props) => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9
    ]
    console.log(images)
  return (
    <div className='fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center'>
        <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-4">
            <div className='pt-2 pe-2 flex items-end justify-end' onClick={() => props.hidePhotoLibrary(false)}>
                <IoClose className='h-8 w-8 cursor-pointer'/>
            </div>
            <div className='grid grid-cols-3 justify-center items-center gap-16 p-20 w-full'>
                { 
                    images.map((image, index) => 
                            <div key={index} onClick={() => {props.setImage(image); props.hidePhotoLibrary(false)}}>
                                <div className='h-24 w-24 cursor-pointer relative'>
                                    <Image src={image} alt='avatar'/>
                                </div>
                            </div>
                    )
                }

            </div>
        </div>
    </div>
  )
}

export default PhotoLibrary