import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";

import { GameCard } from '../../components/GameCard'
import { useGame } from '../../context/game-context';

export const Game = () => {
    const headerGame = useRef()
    const bodyGame = useRef()
    const { cards, setUniqueElements, saveCards, win } = useGame()
    const [prev, setPrev] = useState(-1)
    const [rights, setRights] = useState(0)
    const [errors, setErrors] = useState(0)

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

    useEffect(() => {
        if (win) {
            gsap.to(headerGame.current, {
                duration: 1,
                height: '100vh',
                ease: "expo.out",
                onComplete: () => {
                    window.location.href = '/congrats'
                }
            });
        }
    }, [win])

    const handleCheck = (current) => {
        if (cards[current].id === cards[prev].id) {
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            saveCards(cards)
            setPrev(-1)
            setRights(rights + 1)
        } else {
            cards[current].stat = "wrong"
            cards[prev].stat = "wrong"
            saveCards(cards)
            setErrors(errors + 1)
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
                {
                    !win && <div className='game_header_container'>
                        <span>Aciertos: {rights}</span>
                        <span>Errores: {errors}</span>
                    </div>
                }
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