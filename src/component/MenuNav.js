import React from 'react';

const MenuNavBar = (props) => {
    const menus = props.data;
    return ( 
        <nav className='menu-nav'>
             <ul>
                {menus.map(item => {
                    const {id, url,text} = item;
                    return <li key={id}><a href={url}>{text}</a></li>
                })}
            </ul>
        </nav>
     );
}
 
export default MenuNavBar;