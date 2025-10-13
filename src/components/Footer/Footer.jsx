import './style.css';
import Group from '../../assets/Group.svg';
import VK1 from '../../assets/vk1.svg';
import Facebook1 from '../../assets/facebook1.svg';
import Instagram1 from '../../assets/instagram1.svg';
import Youtube1 from '../../assets/youtube1.svg';
import Telegram1 from '../../assets/telegram1.svg';
import Tiktok1 from '../../assets/tiktok1.svg';
import Twitter1 from '../../assets/twitter1.svg';

const FooterBlock = () => {
    return (
        <div className="footer-block">
            <div className="footer-top">
                <div className="footer-brand">sporthub</div>
                <div className="footer-links">
                    <a href="#" className="footer-link">О ПРОЕКТЕ</a>
                    <a href="#" className="footer-link">ОБРАТНАЯ СВЯЗЬ</a>
                </div>
                <div className="footer-ad">Реклама: ads@sporthub.news</div>
            </div>
            
            <div className="footer-social">
                <div className="social-icon">
                    <img src={VK1} alt="VK" />
                </div>
                <div className="social-icon">
                    <img src={Facebook1} alt="Facebook" />
                </div>
                <div className="social-icon">
                    <img src={Instagram1} alt="Instagram" />
                </div>
                <div className="social-icon">
                    <img src={Youtube1} alt="YouTube" />
                </div>
                <div className="social-icon">
                    <img src={Telegram1} alt="Telegram" />
                </div>
                <div className="social-icon">
                    <img src={Tiktok1} alt="TikTok" />
                </div>
                <div className="social-icon">
                    <img src={Twitter1} alt="Twitter" />
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-copyright">© 2022 «Спортхаб»</div>
                <div className="footer-developer">
                    <img className='footer-image' src={Group} alt="PRAS" />
                    <span className='footer-text'>Разработка сайта — компания PRAS</span>
                </div>
            </div>
        </div>
    );
};

export default FooterBlock;