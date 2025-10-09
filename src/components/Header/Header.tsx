import './style.css';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/burger.svg';

const Header = () => {
    return (
       <>
        <header className="header">
            <div className="header_container container">
              <img className="header_logo" src={Logo} alt="logo" />
               <nav className="header_menu">
                <a href="#" className="header_link">Review</a>
                <a href="#" className="header_link">Экстрим</a>
                <a href="#" className="header_link">Легенды</a>
                <a href="#" className="header_link">зож и туризм</a>
                <a href="#" className="header_link">Позірк</a>
                <a href="#" className="header_link">Треш</a>     
               </nav>
               <button className="header_button">{Burger}</button>
            </div>
        </header>
    </>
  );
};

export default Header;
