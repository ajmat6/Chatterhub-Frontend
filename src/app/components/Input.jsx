import React from 'react'

const Input = (props) => {
    return (
        <div className='flex gap-1 flex-col'>
            {props.label && 
                <label htmlFor="name" className='text-teal-light text-lg px-1'>{props.name}</label>
            }
            <div>
                <input
                    type="text"
                    name='name'
                    value={props.state}
                    onChange={(e) => props.setState(e.target.value)}
                    className='bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full'
                />
            </div>
        </div>
    )
}

export default Input