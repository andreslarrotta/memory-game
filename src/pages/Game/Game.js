import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { gsap } from "gsap";

import { GameCard } from '../../components/GameCard'

export const Game = () => {
    const headerGame = useRef()
    const bodyGame = useRef()
    const arrayTest = [1, 2, 3, 4,]

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


    }, [])


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
                        arrayTest.map(() => {
                            return <GameCard />
                        })
                    }
                </div>
            </div>
        </div>
    )
}