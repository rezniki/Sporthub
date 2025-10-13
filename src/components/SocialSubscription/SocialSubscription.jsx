import './style.css';
import VK from '../../assets/vk.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube 1.svg';
import Telegram from '../../assets/telegram.svg';
import Tiktok from '../../assets/tiktok.svg';
import Twitter from '../../assets/twitter.svg';

const SocialSubscription = () => {
    return (
        <div className="social-subscription">
            <div className="social-section">
                <h3 className="section-title">СОЦСЕТИ</h3>
                <div className="social-icons">
                    <div className="social-icon">
                        <img src={VK} alt="VK"/>
                    </div>
                    <div className="social-icon">
                        <img src={Facebook} alt="Facebook" />
                    </div>
                    <div className="social-icon">
                        <img src={Instagram} alt="Instagram" />
                    </div>
                    <div className="social-icon">
                        <img src={Youtube} alt="YouTube" />
                    </div>
                    <div className="social-icon">
                        <img src={Telegram} alt="Telegram" />
                    </div>
                    <div className="social-icon">
                        <img src={Tiktok} alt="TikTok" />
                    </div>
                    <div className="social-icon">
                        <img src={Twitter} alt="Twitter" />
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