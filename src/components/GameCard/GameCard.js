import React, { useRef } from 'react'

export const GameCard = ({ data }) => {
    const card = useRef();
    const style = {
        'background': `url(${data.image})`,
        'background-size': 'cover',
        'background-position': 'center',
    }
    const handleActive = () => {
        if (card.current.classList.contains("active")) {
            card.current.classList.remove("active");
        } else {
            card.current.classList.add("active");
        }
    }

    return (
        <div
            className='game-card'
            ref={card}
            onClick={handleActive}
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