import React from 'react'

import { Button } from '../../components/Button/Button'
import imageGame from '../../assets/congratulations_icon.png'

export const Congratulations = () => {

    return (
        <div className='congratulations'>
            <div className='congratulations_container'>
                <img src={imageGame} alt='congratulations' />
                <h2>Congratulations !!!!</h2>
                <h1>Andres Larrotta</h1>
                <Button />
            </div>
        </div>
    )
}