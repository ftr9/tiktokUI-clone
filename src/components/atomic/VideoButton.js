import './videoButton.css';
const VideoButton = ({ icon, pouplationSize }) => {
    return (
        <div className="video__button">
            <div className="icon">
                {icon}
            </div>
            <div className="pouplation">
                {pouplationSize}
            </div>
        </div>
    )
}

export default VideoButton
