import './style.css';
import React, {useState} from 'react';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/burger.svg';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);


      return (
        <>
          <header className="header">
              <div className="header_container container">
                <img className="header_logo" src={Logo} alt="logo" />
                <nav className={`header_menu ${menuOpen ? 'active' : ''}`}>
                  <a href="#" className="header_link">Review</a>
                  <a href="#" className="header_link">Экстрим</a>
                  <a href="#" className="header_link">Легенды</a>
                  <a href="#" className="header_link">зож и туризм</a>
                  <a href="#" className="header_link">Позірк</a>
                  <a href="#" className="header_link">Треш</a>
                  <img className={`header_burger ${menuOpen ? 'open' : ''}`} src={Burger} alt="Burger" onClick={toggleMenu} />
                </nav>
                
              </div>
          </header>
      </>
    );
};

export default Header;
