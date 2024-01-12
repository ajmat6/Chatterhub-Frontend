import React, { useEffect, useRef } from 'react'
import {IoClose} from 'react-icons/io5'

const PhotoCapture = (props) => {
    const videoRef = useRef(null);

    useEffect(() => {
        let stream;
        const streamCamera = async () => {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            videoRef.current.srcObject = stream
        }

        streamCamera();
        return () => {
            stream?.getTracks().forEach((track) => track.stop())
        }
    })

    const capturePhoto = () => {
        const canvas = document.createElement('canvas')
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150)
        props.setImage(canvas.toDataURL('image/jpeg'));
        props.hidePhotoCapture(false)
    }

  return (
    <div className='absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg flex items-center justify-center'>
        <div className='flex flex-col gap-4 w-full items-center justify-center'>
            <div className='pt-2 pe-2 flex items-end justify-end' onClick={() => props.hidePhotoCapture(false)}>
                <IoClose className='h-8 w-8 cursor-pointer'/>
            </div>
            <div className='flex justify-center'>
                {/* autoplay is to play the video as soon as possible without waiting for other data load of the page */}
                <video id='video' width={400} autoPlay ref={videoRef}></video>
            </div>
            <button className='h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-blue-500' onClick={capturePhoto}></button>
        </div>
    </div>
  )
}

export default PhotoCapture