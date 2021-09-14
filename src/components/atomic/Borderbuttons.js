import './Borderbutton.css';

const Borderbuttons = ({ size, name }) => {
    return (
        <button className={`borderButton ${size} common`}>{name}</button>
    )
}

export default Borderbuttons
