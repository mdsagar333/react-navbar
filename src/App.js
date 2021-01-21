import './App.css';
import Logo from './component/Logo';
import {menuData, menuIcon} from './data';
import MenuNavBar from './component/MenuNav';
import MenuSocial from './component/MenuSocial'

function App() {
  return (
    <header className='header-container'>
      <nav className="main-nav-container">
        <Logo />
        <MenuNavBar data={menuData} />
        <MenuSocial data={menuIcon} />
      </nav>
    </header>

    
  );
}

export default App;
