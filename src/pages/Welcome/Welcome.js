import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";

import { Button } from '../../components/Button/Button'
import imageGame from '../../assets/title_welcome_page.png'

export const Welcome = () => {
    const welcomeContent = useRef()
    const welcome = useRef()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from(welcome.current, {
                'outline-offset': '0',
                duration: 4,
                delay: 1,
                ease: "expo.out",
                onComplete: () => {
                    gsap.to(welcomeContent.current, {
                        opacity: 1,
                        duration: 3,
                        ease: "expo.out"
                    });
                }
            });

        }, [welcome, welcomeContent]);
        return () => ctx.revert();

    }, []);

    const handlePlay = () => {
        console.log('hola mundo')
        gsap.to(welcome.current, {
            'outline-offset': '0',
            duration: 1,
            ease: "expo.out",
            onComplete: () => {
                gsap.to(welcomeContent.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "expo.out",
                    onComplete: () => {
                        window.location.href = '/name'
                    }
                });
            }
        });
    }

    return (
        <div className='welcome' ref={welcome}>
            <div className='welcome_container' ref={welcomeContent} >
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
                <Button
                    text={'Play'}
                    onClick={handlePlay}
                />
            </div>
            <div className='welcome_name'>
                <p>Andres F. Larrotta Pino</p>
            </div>
        </div>
    )
}