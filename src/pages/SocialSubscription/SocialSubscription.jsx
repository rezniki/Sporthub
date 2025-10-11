import './style.css';

const SocialSubscription = () => {
    return (
        <div className="social-subscription">
            <div className="social-section">
                <h3 className="section-title">СОЦСЕТИ</h3>
                <div className="social-icons">
                    <div className="social-icon">
                        <img src="/src/img/vk.png" alt="VK" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/facebook.png" alt="Facebook" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/instagram.png" alt="Instagram" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/youtube 1.png" alt="YouTube" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/telegram.png" alt="Telegram" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/tiktok.png" alt="TikTok" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/img/twitter.png" alt="Twitter" />
                    </div>
                </div>
            </div>

            <div className="subscription-section">
                <h3 className="section-title">ПОДПИСКА</h3>
                <div className="subscription-form">
                    <input 
                        type="email" 
                        placeholder="Введите ваш email" 
                        className="email-input"
                    />
                    <button className="subscribe-button">ПОДПИСАТЬСЯ</button>
                </div>
            </div>
        </div>
    );
};

export default SocialSubscription;
