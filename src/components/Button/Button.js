import React from 'react'

export const Button = ({ text, color, onClick }) => {

    const handleClickEvent = () => {
        onClick()
    }
    
    return (
        <button className={`button ${color === 'white' ? 'button_white' : ''}`} onClick={handleClickEvent}>
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