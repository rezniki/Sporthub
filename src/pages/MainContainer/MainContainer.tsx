import './style.css';
import Main from '../../components/Main/Main';
import NavContent from '../../components/NavContent/NavContent';
import NewsContent from '../../components/NewsContent/NewsContent';
import ProfileBlocks from '../../components/ProfileBlocks/ProfileBlocks';
import MainNewsContent from '../../components/MainNewsContent/MainNewsContent';
import SocialSubscription from '../../components/SocialSubscription/SocialSubscription';
import FooterNewsContent from '../../components/FooterNewsContent/FooterNewsContent';
import Footer from '../../components/Footer/Footer';

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