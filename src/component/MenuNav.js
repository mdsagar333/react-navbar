import React, {useRef, useEffect, useState} from 'react';

const MenuNavBar = (props) => {
    const menus = props.data.menuData;
    const showdata = props.data.showdata;
    const menuContainer = useRef(null);
    const menu = useRef(null);
    const [heights, setHeight] = useState(0);

    useEffect(() => {
        setHeight(menu.current.getBoundingClientRect().height);
    },[showdata])
    return ( 
        <nav className='menu-nav' style={showdata ? {height: heights} :{}} ref={menuContainer}>
             <ul className='menu-ul' ref={menu}>
                {menus.map(item => {
                    const {id, url,text} = item;
                    return <li key={id}><a href={url}>{text}</a></li>
                })}
            </ul>
        </nav>
     );
}
 
export default MenuNavBar;