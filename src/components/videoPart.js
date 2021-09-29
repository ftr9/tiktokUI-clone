import './videoPart.css';
import Borderbuttons from '../components/atomic/Borderbuttons';
import VideoButton from './atomic/VideoButton';

const VideoPart = ({ name, title, originalSound }) => {
    return (
        <div className="videoPart">

            <div className="videoPart__left">
                <div className="videoPart__header">
                    <div className="videoPart__image">

                    </div>
                    <div className="videoPart__content">
                        <h3 className="videoPart__name">{name}</h3>
                        <p className="videoPart__title">{title}</p>
                    </div>
                </div>
                <div className="videoPart__title--legacy">
                    <ion-icon name="musical-notes-sharp"></ion-icon> Original sound - {originalSound}
                </div>
                <div className="videoPart__video">
                    <div className="videoPart__vid">

                    </div>
                    <div className="videoPart__buttons">
                        <VideoButton icon={<ion-icon name="heart-sharp"></ion-icon>} pouplationSize={'12.5k'} />
                        <VideoButton icon={<ion-icon name="chatbubble-ellipses-sharp"></ion-icon>} pouplationSize={'455.2k'} />
                        <VideoButton icon={<ion-icon name="share-social-sharp"></ion-icon>} pouplationSize={'122.4k'} />
                    </div>
                </div>
            </div>
            <div className="videoPart__right">
                <Borderbuttons name="follow" size="sm" />
            </div>
        </div>
    )
}

export default VideoPart
