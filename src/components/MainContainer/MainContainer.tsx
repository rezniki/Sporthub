import './style.css';
import Main from '../Main/Main.jsx';
import NavContent from '../../pages/NavContent/NavContent';
import NewsContent from '../../pages/NewsContent/NewsContent';
import ProfileBlocks from '../../pages/ProfileBlocks/ProfileBlocks';
import MainNewsContent from '../../pages/MainNewsContent/MainNewsContent';
import SocialSubscription from '../../pages/SocialSubscription/SocialSubscription';
import FooterNewsContent from '../../pages/FooterNewsContent/FooterNewsContent';
import FooterBlock from '../../pages/FooterBlock/FooterBlock';

const MainContainer = () => {
    return (
        <main className="main">
            <Main/>
            <NavContent/>
            <NewsContent/>
            <ProfileBlocks/>
            <MainNewsContent/>
            <SocialSubscription/>
            <FooterNewsContent/>
            <FooterBlock/>
        </main>
    );
}

export default MainContainer;