import React, { useEffect, useState } from 'react'

import { Button } from '../../components/Button/Button'
import imageGame from '../../assets/congratulations_icon.png'
import { useGame } from '../../context/game-context';

export const Congratulations = () => {
    const { getName, saveName } = useGame()
    const [userName, setUserName] = useState('')

    const handlePlayAgain = () => {
        saveName('')
        window.location.href = '/'
    }

    useEffect(() => {
        const nameLocalStorage = getName()
        setUserName(nameLocalStorage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='congratulations'>
            <div className='congratulations_container'>
                <img src={imageGame} alt='congratulations' />
                <h2>Congratulations !!!!</h2>
                <h1>{userName}</h1>
                <Button text={'Play again'} color={'white'} onClick={handlePlayAgain} />
            </div>
        </div>
    )
}