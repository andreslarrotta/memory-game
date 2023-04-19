import React, { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap";

import { Button } from '../../components/Button/Button'
import { useGame } from '../../context/game-context';

export const Name = () => {
    const nameContent = useRef()
    const inputName = useRef()
    const [error, setError] = useState(false)
    const { saveName } = useGame()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from(nameContent.current, {
                opacity: 0,
                duration: 4,
                ease: "expo.out"
            });

        }, [nameContent]);
        return () => ctx.revert();

    }, []);

    const handleContinue = () => {
        let valueInput = inputName.current.value
        if (!valueInput) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            saveName(valueInput)

            gsap.to(nameContent.current, {
                opacity: 0,
                duration: 3,
                ease: "expo.out",
                onComplete: () => {
                    window.location.href = '/game'
                }
            });
        }
    }

    return (
        <div className='name' ref={nameContent}>
            <div className='name_container'>
                <h2>Whats is your name?</h2>
                <input type='text' title='name' name='name' autoFocus ref={inputName} />
                {
                    error && <p>It's important your name!!!!</p>
                }
                <Button
                    text={'Continue'}
                    onClick={handleContinue}
                />
            </div>
        </div>
    )
}