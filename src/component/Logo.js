import React from 'react';
import logoImg from '../logo.svg'
import {FaBars} from 'react-icons/fa'

function Logo(props){
    // console.log(props)
    // const {toggleShow} = props.handler;
    // console.log(props.handler)
    return (
        <div className='logo-container'>
            <div>
            <img src={logoImg} alt='logo'/>
            </div>
            <div className='bar-container'>
                <button className='bar-btn' onClick={() => props.handler()}><FaBars /></button>
            </div>
        </div>
    )
}

export default Logo;