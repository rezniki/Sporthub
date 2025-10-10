import './style.css';
import Logo from '../../assets/logo.svg';

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
              </div>
          </header>
      </>
    );
};

export default Header;
