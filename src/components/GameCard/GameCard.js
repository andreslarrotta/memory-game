import React, { useRef } from 'react'

export const GameCard = ({ data, handleClick, id }) => {
    const itemClass = data.stat ? " active " + data.stat : ""
    const card = useRef();
    const style = {
        'background': `url(${data.image})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
    }

    const handleActive = (id) => {
        handleClick(id)
    }

    return (
        <div
            className={`game-card ${itemClass}`}
            ref={card}
            onClick={() => handleActive(id)}
        >
            <div className='game-card_container'>
                <div className='game-card_front'>
                    Modyo
                </div>
                <div className='game-card_back' style={style}></div>
            </div>
        </div>
    )
}