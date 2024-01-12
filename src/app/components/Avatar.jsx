import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {FaCamera} from 'react-icons/fa'
import ContextMenux from './ContextMenux';
import defaultAvatar from '../../../public/default_avatar.png'
import { PhotoPicker } from './PhotoPicker';
import PhotoLibrary from './PhotoLibrary';
import PhotoCapture from './PhotoCapture';

const Avatar = (props) => {
    const [hover, setHover] = useState(false);
    const [contextMenu, setContextMenu] = useState(false);
    const [contextMenuCor, setContextMenuCor] = useState({x: 0, y: 0});
    const [grabPhoto, setGrabPhoto] = useState(false);
    const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
    const [showPhotoCapture, setShowPhotoCapture] = useState(false);

    const contextMenuOptions = [
        {name: "Take Photo", callback: () => {
            setShowPhotoCapture(true);
        }},
        {name: "Choose from Gallery", callback: () => {
            setShowPhotoLibrary(true);
        }},
        {name: "Upload Photo", callback: () => {
            setGrabPhoto(true);
        }},
        {name: "Remove Photo", callback: () => {
            props.setImage(defaultAvatar)
        }}
    ]

    useEffect(() => {
        // if grabphoto is true then we have to click the input for opening the dialog box as input is not directly 
        if(grabPhoto)
        {
            const data = document.getElementById('photo-picker');
            data.click();
            // when the input field gets focus, then we have to set grab photo false:
            document.body.onfocus = (e) => {
                setTimeout(() => {
                    setGrabPhoto(false) 
                }, 1000);
            }
        }
    }, [grabPhoto])

    const showContextMenu = (e) => {
        e.preventDefault();
        setContextMenu(true);
        setContextMenuCor({x: e.pageX, y: e.pageY}); // pageX and pageY gets the coordinates of the mouse pointer where mouse is clicked
    }

    const photoPickerChange = async (e) => {
        console.log("photot")
        const newPhoto = e.target.files[0];

        // to convert the image into base64 image(images that have been encoded into base64 string. This string can be used to display images, without the need for seperate image files)
        const reader = new FileReader(); // to read the files. Filereader asynchronously reads the files of the computer
        const data = document.createElement('img');

        // when image is selected:
        reader.onload = (event) => {
            data.src = event.target.result;
            data.setAttribute('data-src', event.target.result);
        }
        reader.readAsDataURL(newPhoto);
        setTimeout(() => {
            props.setImage(data.src);
            console.log("image", data.src)
        }, 100);
    }

  return (
    <>
        <div className="flex items-center justify-center">
            {
                props.type === 'sm' &&
                <div className="relative h-10 w-10">
                    {/*  fill will fill the image inside the Image component according the h and w provided in div as it is relative */}
                    <Image src={props.image} alt='image' className='rounded-full' fill/> 
                </div>
            }
            {
                props.type === 'lg' &&
                <div className="relative h-14 w-14">
                    <Image src={props.image} alt='image' className='rounded-full' fill/> 
                </div>
            }
            {
                props.type === 'xl' && (
                <div className='relative cursor-pointer z-0' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <div 
                        className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 z-10 ${hover ? 'visible' : 'hidden'}`}
                        onClick={(e) => showContextMenu(e)}
                        id='context-opener'
                    >
                        <FaCamera 
                            className='text-2xl' 
                            id='context-opener'
                            onClick={(e) => showContextMenu(e)}
                        />
                        <span onClick={(e) => showContextMenu(e)} id='context-opener'>Change <br /> Profile <br /> Photo</span>
                    </div>
                    <div className="h-60 w-60">
                        <Image src={props.image} alt='image' className='rounded-full' fill/> 
                    </div>
                </div>
                )
            }
        </div>
        {
            contextMenu &&
            <ContextMenux 
                options={contextMenuOptions}
                cordinates={contextMenuCor}
                contextMenu={contextMenu}
                setContextMenu={setContextMenu}
            />
        }
        {grabPhoto && <PhotoPicker onChange={photoPickerChange}/>}
        {showPhotoLibrary && <PhotoLibrary setImage={props.setImage} hidePhotoLibrary={setShowPhotoLibrary}/>}
        {showPhotoCapture && <PhotoCapture setImage={props.setImage} hidePhotoCapture={setShowPhotoCapture}/>}
    </>
  )
}

export default Avatar