import './style.css';

const NewsContent = () => {
    return (
        <div className="news-content">
            
            <h2 className="news-title">ПОСЛЕДНЕЕ</h2>
            
            <div className="news-grid">
                <div className="news-item">
                    <div className="news-image">
                        <img src="/src/img/Mask-Group.png" alt="Mountain climber" />
                    </div>
                    <div className="news-text">
                        <div className="news-meta">Сегодня | #БОЛЕЛЬЩИКАМ</div>
                        <h3 className="news-headline">Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?</h3>
                        <p className="news-snippet">И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...</p>
                    </div>
                </div>

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

                <div className="news-item">
                    <div className="news-image">
                        <img src="/src/img/Mask-Group2.png" alt="Mountain climber" />
                    </div>
                    <div className="news-text">
                        <div className="news-meta">Сегодня | #БОЛЕЛЬЩИКАМ</div>
                        <h3 className="news-headline">Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?</h3>
                        <p className="news-snippet">И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsContent;