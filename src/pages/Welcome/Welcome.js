import React from 'react'

import { Button } from '../../components/Button/Button'

export const Welcome = () => {

    return (
        <div className='welcome'>
            <div className='welcome_container'>
                <h2>Welcome</h2>
                <h1>Memory Game</h1>
                <div className='welcome_image'>
                    <div className='welcome_image--square'></div>
                    <div className='welcome_image--square'></div>
                    <div className='welcome_image--square'></div>
                </div>
                <Button />
            </div>
        </div>
    )
}