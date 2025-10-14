import './style.css';
import React, {useState} from 'react';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/burger.svg';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    
      return (
        <>
          <header className="header">
              <div className="header_container container">
                <img className="header_logo" src={Logo} alt="logo" />
                <nav className={`header_menu ${menuOpen ? 'active' : ''}`}>
                  <a href="#" className="header_link" onClick={closeMenu}>Review</a>
                  <a href="#" className="header_link" onClick={closeMenu}>Экстрим</a>
                  <a href="#" className="header_link" onClick={closeMenu}>Легенды</a>
                  <a href="#" className="header_link" onClick={closeMenu}>зож и туризм</a>
                  <a href="#" className="header_link" onClick={closeMenu} >Позірк</a>
                  <a href="#" className="header_link" onClick={closeMenu}>Треш</a>
                </nav>
                <img className={`header_burger ${menuOpen ? 'open' : ''}`} src={Burger} alt="Burger" onClick={toggleMenu} />
                {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
              </div>
          </header>
      </>
    );
};

export default Header;
