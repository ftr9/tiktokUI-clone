import './Accountcard.css';
const Accountcard = ({ name, nickName }) => {
    return (
        <div className="card">
            <div className="card__image"></div>
            <div className="card__name">
                <div className="card__name--primary">{name}</div>
                <div className="card__name--secondary">{nickName}</div>
            </div>
        </div>
    )
}

export default Accountcard
