import './Leftcomponent.css';

import Noborderbutton from './atomic/Noborderbutton';
import Borderbuttons from './atomic/Borderbuttons';
import Accountcard from './atomic/Accountcard';
import { showpopUp } from './redux/actions';
import { connect } from 'react-redux';


const Leftcomponent = ({ showpopUp }) => {
    return (
        <div className="leftcomponent">

            <Noborderbutton name="For You" icon={<ion-icon name="home-sharp"></ion-icon>} color="red" />
            <Noborderbutton name="Following" icon={<ion-icon name="people-sharp"></ion-icon>} color="dark" />

            <div className="leftcomponent__section">
                <p>Log in to follow creators, like videos, and view comments.</p>
                <Borderbuttons onclick={showpopUp} size="xl" name="Log in" />
            </div>

            <div className="leftcomponent__section--bottom">
                <p>Suggested accounts</p>
                <Accountcard name="name 1" nickName="name 1" />
                <Accountcard name="name 2" nickName="name 2" />
                <Accountcard name="name 3" nickName="name 3" />
                <Accountcard name="name 4" nickName="name 4" />
                <Accountcard name="name 5" nickName="name 5" />
                <p>see all</p>
            </div>

            <div className="leftcomponent__section--bottom">
                <p>Discover</p>
                <div className="tags">
                    <div className="hasButton">
                        # emojimitation
                    </div>
                    <div className="hasButton">
                        # photoreel
                    </div>
                    <div className="hasButton">
                        # questions
                    </div>
                    <div className="hasButton">
                        # nature lover
                    </div>
                    <div className="hasButton">
                        <ion-icon name="search-sharp"></ion-icon> luck lama 777
                    </div>
                    <div className="hasButton">
                        <ion-icon name="search-sharp"></ion-icon> suraj chaudhary
                    </div>
                    <div className="hasButton">
                        <ion-icon name="search-sharp"></ion-icon> pritilama
                    </div>
                    <div className="hasButton">
                        <ion-icon name="search-sharp"></ion-icon> tinafarm
                    </div>
                </div>

            </div>

            <footer className="leftcomponent__footer">
                <a href="/">About</a><a href="/">News room</a><a href="/">Contact</a><a href="/">Carrers</a><a href="/">Bytedance</a>
                <a href="/">Tiktok for good</a><a href="/">Advertise</a><a href="/">Developers</a><a href="/">Transparency</a><a href="/">Help</a>
                <a href="/">Safety</a><a href="/">Terms</a><a href="/">Privacy</a><a href="/">Creator Portals</a><a href="/">Community guidelines</a>
            </footer>

            <p className="copyright">@ 20201 tiktok</p>
        </div>
    )
}

export default connect(null, {
    showpopUp
})(Leftcomponent)
