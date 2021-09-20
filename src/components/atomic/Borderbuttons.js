import './Borderbutton.css';

const Borderbuttons = ({ size, name, onclick }) => {
    return (
        <button onClick={onclick} className={`borderButton ${size} common`}>{name}</button>
    )
}

export default Borderbuttons
