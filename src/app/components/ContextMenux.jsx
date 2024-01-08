import React, { useRef } from 'react'

const ContextMenux = ({options, cordinates, contextMenu, setContextMenu}) => {
    // It creates a mutuable object which will not re-render the component
    // useRef is used to access a DOM element directly using ref property used in any DOM element
    const contextMenuRef = useRef(null)

    const handleClick = (e, callback) => {
        e.stopPropagation(); // will not propogate current event further, similar like preventDefault but will not stop the default behaviour like loading of a link
        setContextMenu(false)
        callback();
    }
  return (
    <div
        className={`bg-dropdown-background fixed py-2 z-[100] shadow-xl`}
        ref={contextMenuRef}
        style={{
            top: cordinates.y,
            left: cordinates.x
        }}
    >
        <ul>
            {
                options.map((option) => (
                    <li className='px-5 py-2 cursor-pointer hover:bg-background-default-hover' key={option.name} onClick={(e) => handleClick(e, option.callback)}><span>{option.name}</span></li>
                ))
            }
        </ul>
    </div>
  )
}

export default ContextMenux