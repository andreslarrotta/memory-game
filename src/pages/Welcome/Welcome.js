import React from 'react'

import { Button } from '../../components/Button/Button'
import imageGame from '../../assets/title_welcome_page.png'

export const Welcome = () => {

    return (
        <div className='welcome'>
            <div className='welcome_container'>
                <h2>Welcome</h2>
                <h1>Memory Game</h1>
                <div className='welcome_image'>
                    <div className='welcome_image--square'></div>
                    <div className='welcome_image--square active'>
                        <div className='welcome_image--square_container'>
                            <div className='welcome_image--square-front'></div>
                            <div className='welcome_image--square-back'>
                                <img src={imageGame} alt='memory game logo' />
                            </div>
                        </div>
                    </div>
                    <div className='welcome_image--square'></div>
                </div>
                <Button />
            </div>
            <div className='welcome_name'>
                <p>Andres F. Larrotta Pino</p>
            </div>
        </div>
    )
}