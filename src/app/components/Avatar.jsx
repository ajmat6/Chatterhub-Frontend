import Image from 'next/image'
import React, { useState } from 'react'
import {FaCamera} from 'react-icons/fa'
import ContextMenux from './ContextMenux';

const Avatar = (props) => {
    const [hover, setHover] = useState(false);
    const [contextMenu, setContextMenu] = useState(false);
    const [contextMenuCor, setContextMenuCor] = useState({x: 0, y: 0});
    const contextMenuOptions = [
        {name: "Take Photo", callback: () => {}},
        {name: "Choose from Gallery", callback: () => {}},
        {name: "Upload Photo", callback: () => {}},
        {name: "Remove Photo", callback: () => {}}
    ]

    const showContextMenu = (e) => {
        e.preventDefault();
        setContextMenu(true);
        setContextMenuCor({x: e.pageX, y: e.pageY}); // pageX and pageY gets the coordinates of the mouse pointer where mouse is clicked
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
    </>
  )
}

export default Avatar