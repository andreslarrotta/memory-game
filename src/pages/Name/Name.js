import React from 'react'

import { Button } from '../../components/Button/Button'

export const Name = () => {

    return (
        <div className='name'>
            <div className='name_container'>
                <h2>Whats is your name?</h2>
                <input type='text' title='name' name='name' autoFocus />
                <Button />
            </div>
        </div>
    )
}