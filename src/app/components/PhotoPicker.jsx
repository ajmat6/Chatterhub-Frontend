import React from 'react'
import ReactDom from 'react-dom'

export const PhotoPicker = (props) => {
    const component = (<input type='file' hidden id='photo-picker' onChange={props.onChange}/>)

    // portals are used to render a react element into a diffent DOM node. All the react element are by default children of root node. so root is the ultimate parent. We want component element to be independent of all its parent. So for that portals are used. First argument is react element which you want to render and second is the react DOM node where you want to render. Here the new DOM node is photo-picker-element.
    return ReactDom.createPortal(component, document.getElementById('photo-picker-element'))
}



