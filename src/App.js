import React, {useState} from 'react'
import './App.css';
import Logo from './component/Logo';
import {menuData, menuIcon} from './data';
import MenuNavBar from './component/MenuNav';
import MenuSocial from './component/MenuSocial'

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShow = () => {
    console.log('worked')
    setShowMenu(!showMenu)
  }
  return (
    <header className='header-container'>
      <nav className="main-nav-container">
        <Logo handler={toggleShow}/>
        <MenuNavBar data={{menuData:menuData, showdata: showMenu}} />
        <MenuSocial data={menuIcon} />
      </nav>
    </header>

    
  );
}

export default App;
