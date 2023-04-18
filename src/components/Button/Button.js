import React from 'react'

export const Button = ({ text, color }) => {

    return (
        <button className={`button ${color === 'white' ? 'button_white' : ''}`}>
            <div className='button_container'>
                <div className='button_front'>
                    {text}
                </div>
                <div className='button_back'>
                    {text}
                </div>
            </div>
        </button>
    )
}