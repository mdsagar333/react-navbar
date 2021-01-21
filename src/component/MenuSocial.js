import React from 'react';
import {FaFacebook, FaTwitter, FaLinkedin, FaBehance} from 'react-icons/fa';


const MenuSocial = (props) => {
    const socials = props.data;
    return ( 
        <nav className='social-menu'>
            <ul>
                {socials.map(social => {
                    const {id, url, icon} = social;
                    return <li key={id}><a href={url}>{icon}</a></li>
                })}
            </ul>
        </nav>
     );
}
 
export default MenuSocial;