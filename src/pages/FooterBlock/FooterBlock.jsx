import './style.css';

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
                    <img src="/src/img/vk1.png" alt="VK" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/facebook1.png" alt="Facebook" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/instagram1.png" alt="Instagram" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/youtube1.png" alt="YouTube" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/telegram1.png" alt="Telegram" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/tiktok1.png" alt="TikTok" />
                </div>
                <div className="social-icon">
                    <img src="/src/img/twitter1.png" alt="Twitter" />
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-copyright">© 2022 «Спортхаб»</div>
                <div className="footer-developer">PRAS. Разработка сайта — компания PRAS</div>
            </div>
        </div>
    );
};

export default FooterBlock;
