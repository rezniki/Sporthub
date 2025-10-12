import './style.css';

const ProfileBlocks = () => {
    return (
        <div className="profile-blocks">
            <div className="profile-item">
                <div className="quote-icon">"</div>
                <div className="profile-image">
                    <img src="/src/img/Man1.png" alt="Alexey Mikhailichenko" />
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">Алексей Михайличенко</h3>
                    <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                    <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                </div>
            </div>

            <div className="profile-item">
                <div className="quote-icon">"</div>
                <div className="profile-image">
                    <img src="/src/img/Man2.png" alt="Alexey Mikhailichenko" />
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">Алексей Михайличенко</h3>
                    <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                    <p className="profile-quote">«Динамо» как бы начинает работать заново</p>
                </div>
            </div>

            <div className="profile-item">
                <div className="quote-icon">"</div>
                <div className="profile-image">
                    <img src="/src/img/Man3.png" alt="Alexey Mikhailichenko" />
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">Алексей Михайличенко</h3>
                    <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                    <p className="profile-quote">Сергей Корниленко станет играющим тренером «Крыльев советов»</p>
                </div>
            </div>

            <div className="profile-item">
                <div className="quote-icon">"</div>
                <div className="profile-image">
                    <img src="/src/img/Man1.png" alt="Alexey Mikhailichenko" />
                </div>
                <div className="profile-info">
                    <h3 className="profile-name">Алексей Михайличенко</h3>
                    <p className="profile-title">ГЛАВНЫЙ ТРЕНЕР Ф.К. ДИНАМО</p>
                    <p className="profile-quote">«Динамо» как бы начинает работать заново</p>
                </div>
            </div>

            <div className="news-grid">
                <div className="news-item">
                    <div className="news-image">
                            <img src="/src/img/main-image2.png" alt="Skier" />
                    </div>
                    <div className="news-text">
                        <div className="news-meta">09.07.19 | #ЛЮБИТЕЛЬСКИЙ_СПОРТ</div>
                        <h3 className="news-headline">Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?</h3>
                        <p className="news-snippet">И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...</p>
                    </div>
                </div>

                <div className="news-item">
                    <div className="news-image">
                        <img src="/src/img/main-image1.png" alt="Football players" />
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