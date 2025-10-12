import './style.css';
import Group from '../../assets/Group.svg';

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
                    <img src="/src/assets/vk1.svg" alt="VK" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/facebook1.svg" alt="Facebook" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/instagram1.svg" alt="Instagram" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/youtube1.svg" alt="YouTube" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/telegram1.svg" alt="Telegram" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/tiktok1.svg" alt="TikTok" />
                </div>
                <div className="social-icon">
                    <img src="/src/assets/twitter1.svg" alt="Twitter" />
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