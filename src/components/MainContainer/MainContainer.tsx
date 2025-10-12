import './style.css';
import Main from '../Main/Main.jsx';
import NavContent from '../../pages/NavContent/NavContent';
import NewsContent from '../../pages/NewsContent/NewsContent';
import ProfileBlocks from '../../pages/ProfileBlocks/ProfileBlocks';
import MainNewsContent from '../../pages/MainNewsContent/MainNewsContent';
import SocialSubscription from '../../pages/SocialSubscription/SocialSubscription';
import FooterNewsContent from '../../pages/FooterNewsContent/FooterNewsContent';
import Footer from '../Footer/Footer.jsx';

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
            <Footer/>
        </main>
    );
}

export default MainContainer;