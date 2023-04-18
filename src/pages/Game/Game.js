import React from 'react'

import { GameCard } from '../../components/GameCard'

export const Game = () => {

    return (
        <div className='game'>
            <div className='game_header'>
                <div className='game_header_container'>
                    <span>Aciertos: 2</span>
                    <span>Errores: 2</span>
                </div>
            </div>
            <div className='game_body'>
                <div className='game_body_container'>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        </div>
    )
}