import './style.css';
import Main from '../Main/Main.jsx';
import NavContent from '../../pages/NavContent';
import NewsContent from '../../pages/NewsContent';
import ProfileBlocks from '../../pages/ProfileBlocks';
import SocialSubscription from '../../pages/SocialSubscription';
import FooterBlock from '../../pages/FooterBlock';

const MainContainer = () => {
    return (
        <main className="main">
            <Main/>
            <NavContent/>
            <NewsContent/>
            <ProfileBlocks/>
            <SocialSubscription/>
            <FooterBlock/>
        </main>
    );
}

export default MainContainer;