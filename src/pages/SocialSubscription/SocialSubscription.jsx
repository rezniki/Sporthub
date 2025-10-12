import './style.css';

const SocialSubscription = () => {
    return (
        <div className="social-subscription">
            <div className="social-section">
                <h3 className="section-title">СОЦСЕТИ</h3>
                <div className="social-icons">
                    <div className="social-icon">
                        <img src="/src/assets/vk.svg" alt="VK" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/facebook.svg" alt="Facebook" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/instagram.svg" alt="Instagram" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/youtube 1.svg" alt="YouTube" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/telegram.svg" alt="Telegram" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/tiktok.svg" alt="TikTok" />
                    </div>
                    <div className="social-icon">
                        <img src="/src/assets/twitter.svg" alt="Twitter" />
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
