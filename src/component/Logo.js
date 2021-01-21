import React from 'react';
import logoImg from '../logo.svg'

function Logo(){
    return (
        <div className='logo-container'>
            <img src={logoImg} alt='logo' />
        </div>
    )
}

export default Logo;