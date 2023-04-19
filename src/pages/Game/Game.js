import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";

import { GameCard } from '../../components/GameCard'
import { useGame } from '../../context/game-context';

export const Game = () => {
    const headerGame = useRef()
    const bodyGame = useRef()
    const { cards, setUniqueElements, saveCards } = useGame()
    const [prev, setPrev] = useState(-1)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(headerGame.current, {
                'outline-offset': '0',
                duration: 1,
                delay: 1,
                y: -100,
                ease: "expo.out",
                onComplete: () => {
                    gsap.to(bodyGame.current, {
                        opacity: 1,
                        duration: 3,
                        ease: "expo.out"
                    });
                }
            });
        }, [headerGame, bodyGame]);

        return () => ctx.revert();

    }, []);

    useEffect(() => {
        setUniqueElements()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCheck = (current) => {
        if (cards[current].id === cards[prev].id) {
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            saveCards(cards)
            setPrev(-1)
        } else {
            cards[current].stat = "wrong"
            cards[prev].stat = "wrong"
            saveCards(cards)
            setTimeout(() => {
                cards[current].stat = ""
                cards[prev].stat = ""
                saveCards(cards)
                setPrev(-1)
            }, 1000)
        }
    }

    const handleClick = (id) => {
        if (prev === -1) {
            cards[id].stat = 'active'
            saveCards(cards)
            setPrev(id)
        } else {
            handleCheck(id)
        }
    }

    return (
        <div className='game'>
            <div className='game_header' ref={headerGame}>
                <div className='game_header_container'>
                    <span>Aciertos: 2</span>
                    <span>Errores: 2</span>
                </div>
            </div>
            <div className='game_body' ref={bodyGame}>
                <div className='game_body_container'>
                    {
                        cards?.map((card, index) => {
                            return <GameCard key={index} data={card} id={index} handleClick={handleClick} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}