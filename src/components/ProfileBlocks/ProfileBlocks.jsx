import './style.css';
import Man1 from '../../assets/img/Man1.png';
import Man2 from '../../assets/img/Man2.png';
import Man3 from '../../assets/img/Man3.png';
import Man4 from '../../assets/img/Man1.png';
import Main1 from '../../assets/img/main-image1.png';
import Main2 from '../../assets/img/main-image2.png';
import Frame from '../../assets/Frame.svg';

const ProfileBlocks = () => {
    return (
        <div className="profile-blocks">
            <div className="profile-item">
                <img className='profile-frame' src={Frame} alt="Frame" />
                <div className="profile-item-man">
                    <div className="profile-image">
                        <img src={Man1} alt="Alexey Mikhailichenko" />
                    </div>
                    <div className="profile-info">
                        <h3 className="profile-name">Алексей Михайличенко</h3>
                        <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                        <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                    </div>
                </div>
            </div>

            <div className="profile-item">
                <img className='profile-frame' src={Frame} alt="Frame" />
                <div className="profile-item-man">
                    <div className="profile-image">
                        <img src={Man2} alt="Alexey Mikhailichenko" />
                    </div>
                    <div className="profile-info">
                        <h3 className="profile-name">Алексей Михайличенко</h3>
                        <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                        <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                    </div>
                </div>
            </div>

            <div className="profile-item">
                <img className='profile-frame' src={Frame} alt="Frame" />
                <div className="profile-item-man">
                    <div className="profile-image">
                        <img src={Man3} alt="Alexey Mikhailichenko" />
                    </div>
                    <div className="profile-info">
                        <h3 className="profile-name">Алексей Михайличенко</h3>
                        <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                        <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                    </div>
                </div>
            </div>

            <div className="profile-item">
                <img className='profile-frame' src={Frame} alt="Frame" />
                <div className="profile-item-man">
                    <div className="profile-image">
                        <img src={Man4} alt="Alexey Mikhailichenko" />
                    </div>
                    <div className="profile-info">
                        <h3 className="profile-name">Алексей Михайличенко</h3>
                        <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                        <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                    </div>
                </div>
            </div>

            <div className="news-grid">
                <div className="news-item">
                    <div className="news-image">
                            <img src={Main2} alt="Skier" />
                    </div>
                    <div className="news-text">
                        <div className="news-meta">09.07.19 | #ЛЮБИТЕЛЬСКИЙ_СПОРТ</div>
                        <h3 className="news-headline">Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?</h3>
                        <p className="news-snippet">И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...</p>
                    </div>
                </div>

                <div className="news-item">
                    <div className="news-image">
                        <img src={Main1} alt="Football players" />
                    </div>
                    <div className="news-text">
                        <div className="news-meta">09.07.19 | #ПРОФЕССИОНАЛЬНЫЙ_СПОРТ</div>
                        <h3 className="news-headline">Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?</h3>
                        <p className="news-snippet">И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBlocks;